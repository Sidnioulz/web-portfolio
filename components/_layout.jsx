import 'sass/components/_layout.scss';
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
        <div className="Layout">
          <Header />
          <div className="page-wrapper">
            <Page {...this.props} />
          </div>
          <Footer />
        </div>
      );
    }
  };
};

export default withLayout;
