import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';

const Contact = () => (
  <>
    <PortfolioHead title="Get in Touch">
      <meta name="robots" content="noindex" />
    </PortfolioHead>
    <p>
      {'Contact me '}
      <a href="mailto:sdodierlazaro@gmail.com">via email</a>
      {' or '}
      <a href="tel:+31123456789">by phone at +33 6 24 19 63</a>
      {'.'}

    </p>
  </>
);

export default withLayout(Contact);
