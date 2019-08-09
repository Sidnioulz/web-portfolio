import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';

const Resume = () => (
  <>
    <PortfolioHead title="Download my Resume">
      <meta name="robots" content="noindex,nofollow" />
    </PortfolioHead>
    <p><a href="/static/files/Dodier-Lazaro_Resume.pdf">Resume</a></p>
    <p><a href="https://www.linkedin.com/in/stevedodierlazaro/">LinkedIn</a></p>
  </>
);

export default withLayout(Resume);
