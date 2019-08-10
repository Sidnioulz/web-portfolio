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
  publisher: PropTypes.string.isRequired,
  /* For peer-reviewed publications and theses */
  bibtex: PropTypes.string,
  /* For talks */
  mediahref: PropTypes.string,
});

const PortfolioPropTypes = {
  publications: PropTypes.arrayOf(publication),
  publication,
};

export default PortfolioPropTypes;
