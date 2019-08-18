import css from 'sass/components/publications/PubToolbar.scss';
import CitationIcon from 'components/publications/CitationIcon';
import Button from 'components/Button';
import DownloadButton from 'components/DownloadButton';
import PortfolioPropTypes from 'data/portfolio-prop-types';

const PubToolbar = props => (
  <div className={css.PubToolbar}>
    {
        props.publication.istalk
          ? (
            <Button
              icon="video"
              tooltip="Watch Talk"
              handler={() => window.open(props.publication.mediahref)}
            />
          )
          : (
            <DownloadButton
              icon="download"
              tooltip="Download PDF"
              href={props.publication.href}
            />
          )
      }
    <CitationIcon publication={props.publication} />
  </div>
);

PubToolbar.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

export default PubToolbar;
