import css from 'sass/components/Footer.scss';

const Footer = props => (
  <footer className={`${props.className ? `${props.className} ` : ''}${css.Footer}`}>
    <img src="static/images/footer/L.png" className={css.left} alt="" />
    <img src="static/images/footer/Water.png" className={css.water} alt="" />
    <img src="static/images/footer/R.png" className={css.right} alt="" />
  </footer>
);

export default Footer;
