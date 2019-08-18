import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';

const publication = PropTypes.exact({
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: ExtraPropTypes.integer.isRequired,
  href: PropTypes.string.isRequired,
  istalk: PropTypes.bool.isRequired,
  publication: PropTypes.string.isRequired,
  publicationShort: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  /* For peer-reviewed publications and theses */
  bibtex: PropTypes.string,
  /* For talks */
  mediahref: PropTypes.string,
});

// https://www.w3schools.com/tags/att_input_type.asp
const inputType = PropTypes.oneOf([
  'button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden',
  'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit',
  'tel', 'text', 'time', 'url', 'week',
]);

const PortfolioPropTypes = {
  publications: PropTypes.arrayOf(publication),
  publication,
  inputType,
};

export default PortfolioPropTypes;
