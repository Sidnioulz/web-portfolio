import css from 'sass/components/publications/CitationBlob.scss';
import Button from 'components/Button';
import InteractiveIcon from 'components/InteractiveIcon';
import DownloadButton from 'components/DownloadButton';
import PropTypes from 'prop-types';
import PortfolioPropTypes from 'data/portfolio-prop-types';
import copy from 'services/Clipboard';


const CitationBlob = props => (
  <div className={css.CitationBlob}>
    <div className={css.Toolbar}>
      <InteractiveIcon
        scale="small"
        icon="close"
        tooltip="Close"
        handler={props.onClose}
      />
      <div className={css.ToolbarSpacing} />
      <Button
        scale="small"
        icon="copy"
        handler={() => copy(props.publication.bibtex)}
      >
        {'Copy'}
      </Button>
      <DownloadButton
        scale="small"
        icon="download"
        download={`dodier-lazaro_${props.publication.key}.bib`}
        href={() => window.URL.createObjectURL(new Blob([props.publication.bibtex], { type: 'application/x-bibtex' }))}
      >
        {'Download'}
      </DownloadButton>
    </div>
    <pre>{props.publication.bibtex}</pre>
  </div>
);

CitationBlob.propTypes = {
  onClose: PropTypes.func.isRequired,
  publication: PortfolioPropTypes.publication.isRequired,
};

export default CitationBlob;
