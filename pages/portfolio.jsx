import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';

const Portfolio = () => (
  <>
    <PortfolioHead title="Download my PDF Portfolio">
      <meta name="robots" content="noindex,nofollow" />
    </PortfolioHead>
    <p>
      {'Download a case study of my latest product redesign in '}
      <a href="/static/files/Dodier-Lazaro_Portfolio_PRINT.pdf">print quality</a>
      {' or '}
      <a href="/static/files/Dodier-Lazaro_Portfolio_SCREEN.pdf">screen quality</a>
    </p>
  </>
);

export default withLayout(Portfolio);
