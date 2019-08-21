// import css from 'sass/components/Form.scss';
// <form className={`${props.className ? `${props.className} ` : ''}${css.Form}`}>
import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarSpacing } from 'components/Toolbar';
import asyncState from 'services/AsyncState';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset: false,
    };
    props.children.filter(child => child.name).forEach((child) => {
      this.state[`field-${child.name}`] = child.value || null;
    });

    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  async onSubmit() {
    this.setState({ submitting: true });

    const data = {};
    Object.keys(this.state).filter(key => key.startsWith('field-')).forEach((key) => {
      data[key.slice('field-'.length)] = this.state[key];
    });

    const res = await fetch('/api/contact', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      await asyncState(this)({ submitting: false, submitted: true });
    }

    await this.resetForm();
  }

  updateValue(e) {
    const { name, value } = e.currentTarget;
    this.setState(() => ({ [`field-${name}`]: value }));
  }

  async resetForm() {
    this.DOMform.reset();
    await asyncState(this)((state) => {
      const resetState = { reset: true };
      const fieldValues = Object.keys(state).filter(key => key.startsWith('field-'));
      fieldValues.forEach((value) => { resetState[value] = ''; });
      return resetState;
    });
    await asyncState(this)({ reset: false });
  }

  render() {
    const formChildren = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        value: this.state[`field-${child.props.name}`],
        onChange: this.updateValue,
        reset: this.state.reset,
      }),
    );

    let submitToolbar;
    if (this.props.submit) {
      submitToolbar = (
        <Toolbar>
          <ToolbarSpacing />
          {React.cloneElement(this.props.submit, {
            type: 'submit',
            disabled: true,
            tooltip: 'Sorry, my mail server is down right now. Please find me on LinkedIn instead.',
          })}
        </Toolbar>
      );
    }

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
        ref={(form) => { this.DOMform = form; }}
      >
        {formChildren}
        {submitToolbar}
      </form>
    );
  }
}

// TODO submitting
// TODO submitted

// TODO
// <ProgressButton
// className="button green"
// formNoValidate={true}
// inProgress={this.state.submitting}
// inProgressText='Submitting'
// isDone={this.state.submitted}
// isDoneText='Submitted'>
// Submit Form
// </ProgressButton>

Form.propTypes = {
  submit: PropTypes.element,
};

Form.defaultProps = {
  submit: null,
};

export default Form;