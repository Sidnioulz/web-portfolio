import withLayout from 'components/_layout';
import PortfolioPropTypes from 'data/portfolio-prop-types';
import json from 'data/publications.json';

const Page = props => (
  <>
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

export default withLayout(Page);
