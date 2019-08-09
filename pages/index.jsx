// import fetch from 'isomorphic-unfetch';
import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';
import Link from 'next/link';

const Index = () => (
  <>
    <PortfolioHead title="Portfolio" />
    <h2>Under Development</h2>
    <p>Please come back in a few weeks.</p>
    <h6>
      {'Psst. Want to see the Figma API in action? '}
      <Link href="/figma"><a>Click here to see my local figma styles rendered in HTML.</a></Link>
    </h6>
  </>
);

export default withLayout(Index);
