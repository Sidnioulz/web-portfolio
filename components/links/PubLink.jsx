import Link from 'next/link';
import PortfolioPropTypes from 'data/portfolio-prop-types';

const PubLink = props => (
  <li>
    <Link href="/pub/[key]" as={`/pub/${props.publication.key}`}>
      <a>
        {props.publication.title}
      </a>
    </Link>
    <button type="button" data-href={props.publication.href}>Download PDF</button>
    <button type="button" data-bibtex={props.publication.bibtex}>Cite</button>
  </li>
);

PubLink.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

export default PubLink;
