import React from 'react';
import PortfolioPropTypes from 'data/portfolio-prop-types';
import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';
import PubLink from 'components/publications/PubLink';
import json from 'data/publications.json';
// import css from 'sass/pages/publications.scss';

class PublicationsPage extends React.Component {
  static async getInitialProps() {
    return {
      publications: json,
    };
  }

  render() {
    // const pubsPerYear = {};
    // this.props.publications.forEach((pub) => {
    //   const pubsOnThatYear = pubsPerYear[pub.year] || [];
    //   pubsOnThatYear.push(pub);
    //   pubsPerYear[pub.year] = pubsOnThatYear;
    // });

    return (
      <>
        <PortfolioHead title="Publications & Talks" />
        <h1>Publications & Talks</h1>
        {this.props.publications.map(pub => (<PubLink key={pub.key} publication={pub} />))}
        {/*
          Object.entries(pubsPerYear).sort((a, b) => b[0] - a[0]).map(([year, pubs]) => (
            <div key={year}>
              <h5 className={css['year-group']}>{year}</h5>
              {pubs.map(pub => (<PubLink key={pub.key} publication={pub} />))}
            </div>
          ))
        */}
      </>
    );
  }
}

PublicationsPage.propTypes = {
  publications: PortfolioPropTypes.publications.isRequired,
};


export default withLayout(PublicationsPage);
