import Button from 'components/Button';
import PropTypes from 'prop-types';

const DownloadButton = props => (
  <a
    download={props.download}
    href={props.href}
  >
    <Button {...props} handler={() => false} />
  </a>
);

DownloadButton.propTypes = {
  icon: PropTypes.string,
  download: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

DownloadButton.defaultProps = {
  icon: null,
  download: true,
};

export default DownloadButton;
