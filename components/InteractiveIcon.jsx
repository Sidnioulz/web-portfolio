import css from 'sass/components/InteractiveIcon.scss';
import Button from 'components/Button';

const InteractiveIcon = props => (
  <Button {...props} className={css.InteractiveIcon} classNameIcon={css.ButtonIcon} />
);

export default InteractiveIcon;
