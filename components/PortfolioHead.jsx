import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const PortfolioHead = props => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    <meta name=" theme-color" content="#1185c2" />
    <link rel="icon" sizes="192x192" href="/static/images/AppIcon.png" />
    <meta
      name="description"
      content="Steve Dodier-Lazaro's portfolio of UX Design, Software Development projects and research work."
    />
    {/* TODO: og-title, og-description, og-image */}
    <meta name="author" content="Steve Dodier-Lazaro" />
    <meta name="copyright" content="gpl-3.0-or-later" />
    <meta name="robots" content="follow" />
    <title>
      { props.title }
      {' – Steve D. Lazaro'}
    </title>
    { props.children }
  </Head>
);

PortfolioHead.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

PortfolioHead.defaultProps = {
  children: null,
};

export default PortfolioHead;
