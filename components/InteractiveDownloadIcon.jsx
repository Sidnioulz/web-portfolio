import css from 'sass/components/InteractiveIcon.scss';
import DownloadButton from 'components/DownloadButton';

const InteractiveDownloadIcon = props => (
  <DownloadButton {...props} className={css.InteractiveIcon} classNameIcon={css.ButtonIcon} />
);

export default InteractiveDownloadIcon;
