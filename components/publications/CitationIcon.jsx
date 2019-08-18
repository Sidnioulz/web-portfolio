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
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return (
      <span className={css.CitationBlobContainer}>
        <InteractiveIcon
          icon="quote"
          tooltip="Cite"
          handler={this.toggleState}
        />
        { this.state.isOpen ? (
          <CitationBlob
            publication={this.props.publication}
            onClose={this.toggleState}
          />
        ) : '' }
      </span>
    );
  }
}

CitationIcon.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

export default CitationIcon;
