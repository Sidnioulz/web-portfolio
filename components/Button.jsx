import css from 'sass/components/Button.scss';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

// TODO: tooltip

const Button = props => (
  <button
    type={props.type}
    disabled={props.disabled === true || props.disabled === 'disabled' || props.disabled === 'true'}
    onClick={props.handler}
    className={props.className || css.Button}
  >
    {props.icon ? <Icon className={props.classNameIcon ? props.classNameIcon : css.ButtonIcon} name={props.icon} /> : ''}
    {props.children ? <span className={css.ButtonInner}>{props.children}</span> : ''}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  classNameIcon: PropTypes.string,
  icon: PropTypes.string,
  handler: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  disabled: null,
  classNameIcon: null,
  icon: null,
  type: 'button',
};

export default Button;
