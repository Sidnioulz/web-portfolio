// import css from 'sass/components/Form.scss';
// <form className={`${props.className ? `${props.className} ` : ''}${css.Form}`}>
import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarSpacing } from 'components/Toolbar';

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

  onSubmit() {
    console.warn('SUB');
    // TODO
    this.resetForm();
  }

  updateValue(e) {
    const { name, value } = e.currentTarget;
    this.setState(() => ({ [`field-${name}`]: value }));
  }

  resetForm() {
    this.DOMform.reset();
    this.setState((state) => {
      const resetState = { reset: true };
      const fieldValues = Object.keys(state).filter(key => key.startsWith('field-'));
      fieldValues.forEach((value) => { resetState[value] = ''; });
      return resetState;
    }, () => this.setState(() => ({ reset: false })));
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

Form.propTypes = {
  submit: PropTypes.element,
};

Form.defaultProps = {
  submit: null,
};

export default Form;
