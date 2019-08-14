import Button from 'components/Button';
import PropTypes from 'prop-types';

const DownloadButton = props => (
  <a
    download={props.download}
    href={props.href}
  >
    <Button {...props} handler={() => console.log('boop')} />
  </a>
);

DownloadButton.propTypes = {
  classNameIcon: PropTypes.string,
  icon: PropTypes.string,
  download: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

DownloadButton.defaultProps = {
  classNameIcon: null,
  icon: null,
  download: true,
};

export default DownloadButton;
