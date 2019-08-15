import css from 'sass/components/InteractiveIcon.scss';
import DownloadButton from 'components/DownloadButton';

const InteractiveDownloadIcon = props => (
  <DownloadButton {...props} className={css.InteractiveIcon} />
);

export default InteractiveDownloadIcon;
