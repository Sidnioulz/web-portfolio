import css from 'sass/components/Button.scss';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    type={props.type}
    disabled={props.disabled === true || props.disabled === 'disabled' || props.disabled === 'true'}
    onClick={props.handler}
    className={`${props.className} ${css.Button}${props.scale === 'small' ? ` ${css.ButtonSmall}` : ''}`}
  >
    {props.icon ? (
      <Icon
        className={`${css.ButtonIcon}${!props.children ? ` ${css.ButtonIconNoText}` : ''}`}
        name={props.icon}
      />
    ) : ''}
    {props.children ? <span className={css.ButtonInner}>{props.children}</span> : ''}
    {props.tooltip ? <span className={css.Tooltip}>{props.tooltip}</span> : ''}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  icon: PropTypes.string,
  tooltip: PropTypes.string,
  handler: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  scale: PropTypes.oneOf(['small', 'medium']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  disabled: null,
  icon: null,
  tooltip: null,
  scale: 'medium',
  type: 'button',
};

export default Button;
