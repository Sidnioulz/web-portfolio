import Link from 'next/link';
import PortfolioPropTypes from 'data/portfolio-prop-types';
import PortfolioHead from 'components/PortfolioHead';
import PubToolbar from 'components/publications/PubToolbar';
import json from 'data/publications.json';

const Page = props => (
  <>
    <PortfolioHead title={props.publication.title} />
    <Link href="/publications">
      <a>Back</a>
    </Link>
    <h2>{props.publication.title}</h2>
    <PubToolbar publication={props.publication} />
    <h3>Metadata</h3>
    <ul>
      <li key="publication">
        {props.publication.key.endsWith('thesis')
          ? props.publication.publication
          : `Presented at ${props.publication.publication}`}
      </li>
      <li key="publisher">{`Published by ${props.publication.publisher} in ${props.publication.year}`}</li>
      <li key="authors">
        {`Author${props.publication.authors.length > 1 ? 's' : ''}: ${props.publication.authors.join(' · ')}`}
      </li>
    </ul>
    <h3>Abstract</h3>
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
