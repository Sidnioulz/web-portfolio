import PortfolioPropTypes from 'data/portfolio-prop-types';
import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';
import PubLink from 'components/links/PubLink';
import TalkLink from 'components/links/TalkLink';
import json from 'data/publications.json';


const Page = props => (
  <>
    <PortfolioHead title="Publications & Talks" />
    <h2>Publications & Talks</h2>
    <p>
      {'See my publications with citations on my '}
      <a href="https://scholar.google.com/citations?user=Imc_z-wAAAAJ&hl=en">Google Scholar profile</a>
      {'.'}
    </p>
    <h3>Peer-Reviewed Publications & Theses</h3>
    <ul>
      {props.publications
        .filter(pub => !pub.istalk)
        .map(pub => (<PubLink key={pub.key} publication={pub} />))}
    </ul>
    <h3>Talks</h3>
    <ul>
      {props.publications
        .filter(pub => pub.istalk)
        .map(pub => (<TalkLink key={pub.key} publication={pub} />))}
    </ul>
  </>
);

Page.propTypes = {
  publications: PortfolioPropTypes.publications.isRequired,
};

Page.getInitialProps = async function () {
  return {
    publications: json.sort((a, b) => b.year - a.year), // reverse
  };
};


export default withLayout(Page);
