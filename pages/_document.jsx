import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta name=" theme-color" content="#1185c2" />
          <link rel="preload" href="/static/fonts/subset-Baloo.woff2" crossOrigin="true" as="font" />
          <link rel="preload" href="/static/fonts/subset-MuseoSans-300.woff2" crossOrigin="true" as="font" />
          <link rel="preload" href="/static/fonts/subset-Quicksand-Regular.woff2" crossOrigin="true" as="font" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
