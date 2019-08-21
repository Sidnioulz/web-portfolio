import css from 'sass/components/BlockQuote.scss';
import PropTypes from 'prop-types';

const BlockQuote = props => (
  <blockquote
    className={`${css.BlockQuote} ${css[`Float${props.float}`]} ${css[`Decoration${props.decoration}`]}`}
  >
    {props.children}
  </blockquote>
);

BlockQuote.propTypes = {
  decoration: PropTypes.oneOf(['none', 'dots', 'quote']),
  float: PropTypes.oneOf(['left', 'right', 'none']),
};

BlockQuote.defaultProps = {
  decoration: 'none',
  float: 'none',
};

export default BlockQuote;
