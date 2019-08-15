import CitationIcon from 'components/publications/CitationIcon';
import InteractiveIcon from 'components/InteractiveIcon';
import InteractiveDownloadIcon from 'components/InteractiveDownloadIcon';
import PortfolioPropTypes from 'data/portfolio-prop-types';

const PubToolbar = props => (
  <>
    {
        props.publication.istalk
          ? (
            <InteractiveIcon
              icon="video"
              tooltip="Watch Talk"
              handler={() => window.open(props.publication.mediahref)}
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
    <CitationIcon publication={props.publication} />
  </>
);

PubToolbar.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

export default PubToolbar;
