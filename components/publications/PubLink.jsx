import css from 'sass/components/publications/PubLink.scss';
import Link from 'next/link';
import PubToolbar from 'components/publications/PubToolbar';
import PortfolioPropTypes from 'data/portfolio-prop-types';

const PubLink = props => (
  <div className={css.PubLink}>
    <Link href="/pub/[key]" as={`/pub/${props.publication.key}`}>
      <a className={css.title} title={`View ${props.publication.istalk ? 'talk' : 'publication'}`}>
        {props.publication.title}
      </a>
    </Link>
    <PubToolbar className={css.buttons} publication={props.publication} />
    <div className={css.meta}>
      <span className={css.venue}>
        {props.publication.publicationShort}
      </span>
      <span className={css.authors}>
        {props.publication.authors.join(' · ')}
      </span>
      <span className={css.year}>
        {props.publication.year}
      </span>
    </div>
  </div>
);

PubLink.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

export default PubLink;
