import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';

const Resume = () => (
  <>
    <PortfolioHead title="Download my Resume">
      <meta name="robots" content="noindex,nofollow" />
    </PortfolioHead>
    <p>This is my Web portfolio. It is currently being built, and not yet ready for showing.</p>
  </>
);

export default withLayout(Resume);
