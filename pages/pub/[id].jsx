import PortfolioPropTypes from 'data/portfolio-prop-types';
import PortfolioHead from 'components/PortfolioHead';
import json from 'data/publications.json';

const Page = props => (
  <>
    <PortfolioHead title={props.publication.title} />
    <h2>{props.publication.title}</h2>
    <blockquote>{props.publication.authors.join(' · ')}</blockquote>
    {props.publication.description.split('\n').map(p => (<p>{p}</p>))}
  </>
);

Page.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

Page.getInitialProps = async function (context) {
  const { id } = context.query;
  return { publication: json.find(pub => pub.key === id) };
};

export default Page;
