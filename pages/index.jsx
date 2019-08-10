// import fetch from 'isomorphic-unfetch';
import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';
import Link from 'next/link';

const Index = () => (
  <>
    <PortfolioHead title="Portfolio" />
    <h1>Under Development</h1>
    <h2>Please come back in a few weeks.</h2>
    <p>
      {'Psst. Want to see the Figma API in action? '}
      <Link href="/figma"><a>Click here to see my local figma styles rendered in HTML.</a></Link>
    </p>
  </>
);

export default withLayout(Index);
