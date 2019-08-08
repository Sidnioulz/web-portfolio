import css from 'sass/components/_layout.scss';
import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const withLayout = function (Page) {
  return class Higher extends React.Component {
    static async getInitialProps(ctx) {
      return Page.getInitialProps ? Page.getInitialProps(ctx) : {};
    }

    render() {
      return (
        <div className={css.Layout}>
          <Header className={css.Header} />
          <div className={css['page-wrapper']}>
            <Page {...this.props} />
          </div>
          <Footer className={css.Footer} />
        </div>
      );
    }
  };
};

export default withLayout;
