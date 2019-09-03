import css from 'sass/components/Form.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarSpacing } from 'components/Toolbar';
import asyncState from 'services/AsyncState';
import getConfig from 'next/config';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      reset: false,
      submitted: false,
      submitting: false,
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

    const success = await this.props.submitHandler.call(this, data);
    if (success) {
      await asyncState(this)({ submitting: false, submitted: true });
    } else {
      await asyncState(this)({ submitting: false, submitted: false, error: true });
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

  shouldDisableForm() {
    return ((this.state.submitted || this.state.error) && !this.props.multiSubmit);
  }

  render() {
    const formChildren = React.Children.map(
      this.props.children,
      child => React.cloneElement(child, {
        value: this.state[`field-${child.props.name}`],
        onChange: this.updateValue,
        reset: this.state.reset,
        disabled: this.state.submitting || this.shouldDisableForm(),
      }),
    );

    let submitToolbar;
    if (this.props.submit) {
      submitToolbar = (
        <Toolbar>
          {this.state.submitted
            ? <span className={css.SubmittedLabel}>Thank you, your message was received.</span>
            : ''}
          {this.state.error
            ? (
              <span className={css.ErrorLabel}>
                {'Sorry, my mail server failed to send your message. Please '}
                <a href={`"mailto:${getConfig().publicRuntimeConfig.contactFormFallbackEmail}"`}>email me directly</a>
                {', or try again tomorrow.'}
              </span>
            )
            : ''}
          <ToolbarSpacing />
          {this.shouldDisableForm()
            ? ''
            : React.cloneElement(this.props.submit, {
              type: 'submit',
              inProgress: this.state.submitting,
              inProgressText: 'Sending',
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
  multiSubmit: PropTypes.bool,
  submit: PropTypes.element,
  submitHandler: PropTypes.func.isRequired,
};

Form.defaultProps = {
  multiSubmit: false,
  submit: null,
};

export default Form;
