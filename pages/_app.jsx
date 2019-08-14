import React from 'react';
import App from 'next/app';
import Header from 'components/Header';
import Footer from 'components/Footer';
import css from 'sass/components/_layout.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className={css.Layout}>
        <Header className={css.Header} />
        <div className={css['page-wrapper']}>
          <Component {...pageProps} />
        </div>
        <Footer className={css.Footer} />
      </div>
    );
  }
}

export default MyApp;
