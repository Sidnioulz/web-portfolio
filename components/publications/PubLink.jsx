import css from 'sass/components/publications/PubLink.scss';
import Link from 'next/link';
import InteractiveIcon from 'components/InteractiveIcon';
import InteractiveDownloadIcon from 'components/InteractiveDownloadIcon';
import PortfolioPropTypes from 'data/portfolio-prop-types';

// TODO connect buttons

const PubLink = props => (
  <div className={css.PubLink}>
    <Link href="/pub/[key]" as={`/pub/${props.publication.key}`}>
      <a className={css.title} title={`View ${props.publication.istalk ? 'talk' : 'publication'}`}>
        {props.publication.title}
      </a>
    </Link>
    <div className={css.buttons}>
      {
        props.publication.istalk
          ? (
            <InteractiveDownloadIcon
              icon="video"
              tooltip="Watch Talk"
              download={false}
              href={props.publication.mediahref}
            />
          )
          : (
            <InteractiveDownloadIcon
              icon="download"
              tooltip="Download PDF"
              href={props.publication.href}
            />
          )
      }
      <InteractiveIcon icon="quote" data-bibtex={props.publication.bibtex} tooltip="Cite" handler={() => console.log('cite')} />
    </div>
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
