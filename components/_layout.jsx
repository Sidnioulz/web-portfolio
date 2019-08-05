import React from 'react';
import Header from 'components/Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const withLayout = function (Page) {
  return class Higher extends React.Component {
    static async getInitialProps(ctx) {
      return Page.getInitialProps
        ? Page.getInitialProps(ctx)
        : {};
    }

    render() {
      return (
        <div style={layoutStyle}>
          <Header />
          <Page {...this.props} />
        </div>
      );
    }
  };
};

export default withLayout;
