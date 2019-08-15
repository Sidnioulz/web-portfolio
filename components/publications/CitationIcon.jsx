import React from 'react';
import InteractiveIcon from 'components/InteractiveIcon';
import CitationBlob from 'components/publications/CitationBlob';
import css from 'sass/components/publications/CitationBlob.scss';
import PortfolioPropTypes from 'data/portfolio-prop-types';

class CitationIcon extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <span className={css.CitationBlobContainer}>
        <InteractiveIcon
          icon="quote"
          tooltip="Cite"
          handler={
            () => this.setState(state => ({
              isOpen: !state.isOpen,
            }))
          }
        />
        { this.state.isOpen ? <CitationBlob publication={this.props.publication} /> : '' }
      </span>
    );
  }
}

CitationIcon.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

export default CitationIcon;
