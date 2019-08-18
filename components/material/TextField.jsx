import React from 'react';
import PortfolioPropTypes from 'data/portfolio-prop-types';
import PropTypes from 'prop-types';
import TextField, { HelperText, Input } from '@material/react-text-field';
import css from 'sass/components/md-text-field.scss';

class MDTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
    };
  }

  componentDidMount() {
    if (this.props.autofocus) {
      const { inputElement } = this.input;
      if (inputElement) {
        inputElement.focus();
      }
    }
  }

  render() {
    return (
      <div className={css.TextField}>
        <TextField
          label={this.props.label}
          helperText={typeof this.props.helperText === 'string'
            ? <HelperText>this.props.helperText</HelperText>
            : this.props.helperText}
          outlined
          textarea={this.props.textarea}
        >
          <Input
            required={this.props.required ? 'required' : false}
            ref={(input) => { this.input = input; }}
            type={this.props.type}
            autofocus={this.props.autofocus}
            value={this.state.value}
            onChange={(e) => {
              const { value } = e.currentTarget; // e is pooled and can't be used async.
              this.setState(() => ({ value }));
            }}
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
  required: PropTypes.bool,
  textarea: PropTypes.bool,
  type: PortfolioPropTypes.inputType,
  value: PropTypes.string,
};

MDTextField.defaultProps = {
  autofocus: false,
  helperText: null,
  required: true,
  textarea: false,
  type: 'text',
  value: '',
};


export default MDTextField;
