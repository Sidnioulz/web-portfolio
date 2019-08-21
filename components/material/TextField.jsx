import React from 'react';
import PortfolioPropTypes from 'data/portfolio-prop-types';
import PropTypes from 'prop-types';
import TextField, { HelperText, Input } from '@material/react-text-field';
import css from 'sass/components/md-text-field.scss';

class MDTextField extends React.Component {
  componentDidMount() {
    if (this.props.autofocus) {
      /* Sadly, the MDC textfield isn't fully initialised after mounting.
        * We need to give it a few milliseconds or it won't properly handle
        * the focus event when we focus. */
      setTimeout(() => {
        const { inputElement } = this.input;
        if (inputElement) {
          inputElement.focus();
        }
      }, 10);
    }
  }

  render() {
    return (
      <div className={css.TextField}>
        <TextField
          label={`${this.props.label}  `}
          helperText={typeof this.props.helperText === 'string'
            ? <HelperText>this.props.helperText</HelperText>
            : this.props.helperText}
          outlined
          textarea={this.props.textarea}
        >
          <Input
            name={this.props.name}
            required={this.props.required ? 'required' : false}
            ref={(input) => { this.input = input; }}
            type={this.props.type}
            isValid={this.props.reset ? true : undefined}
            value={this.props.reset ? '' : this.props.value}
            onChange={this.props.onChange}
          />
        </TextField>
      </div>
    );
  }
}

MDTextField.propTypes = {
  autofocus: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  reset: PropTypes.bool,
  textarea: PropTypes.bool,
  type: PortfolioPropTypes.inputType,
  value: PropTypes.string,
};

MDTextField.defaultProps = {
  autofocus: false,
  helperText: null,
  onChange: null,
  required: true,
  reset: false,
  textarea: false,
  type: 'text',
  value: '',
};


export default MDTextField;
