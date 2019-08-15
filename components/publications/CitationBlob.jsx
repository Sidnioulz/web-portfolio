import css from 'sass/components/publications/CitationBlob.scss';
import Button from 'components/Button';
import DownloadButton from 'components/DownloadButton';
import PortfolioPropTypes from 'data/portfolio-prop-types';
import copy from 'services/Clipboard';


const CitationBlob = props => (
  <div className={css.CitationBlob}>
    <pre>{props.publication.bibtex}</pre>
    <>
      <Button
        className={css.Button}
        scale="small"
        icon="copy"
        handler={() => copy(props.publication.bibtex)}
      >
        {'Copy'}
      </Button>
      <DownloadButton
        className={css.Button}
        scale="small"
        icon="download"
        download={`dodier-lazaro_${props.publication.key}.bib`}
        href={() => window.URL.createObjectURL(new Blob([props.publication.bibtex], { type: 'application/x-bibtex' }))}
      >
        {'Download'}
      </DownloadButton>
    </>
  </div>
);

CitationBlob.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

export default CitationBlob;
