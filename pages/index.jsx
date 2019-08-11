import fetch from 'isomorphic-unfetch';
import withLayout from 'components/_layout';
import PortfolioHead from 'components/PortfolioHead';
import moment from 'moment';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Page = props => (
  <>
    <PortfolioHead title="Portfolio" />
    <h1>Under Development</h1>
    <p>Please come back in a few weeks.</p>
    <h2 style={{ marginTop: '5rem' }}>I don&apos;t believe you, it&apos;s probably been like that for years.</h2>
    <p>
      {'The last commit on '}
      <a href="https://github.com/Sidnioulz/web-portfolio">my portfolio&apos;s repository</a>
      {' was '}
      {moment(props.lastCommit).fromNow()}
      {'.'}
    </p>
    <p style={{ marginTop: '10rem' }}>
      {'Psst. Want to see the Figma API in action? '}
      <Link href="/figma"><a>Click here to see my local figma styles rendered in HTML.</a></Link>
    </p>
  </>
);

Page.propTypes = {
  lastCommit: PropTypes.instanceOf(Date).isRequired,
};

Page.getInitialProps = async function () {
  const res = await fetch('https://api.github.com/repos/Sidnioulz/web-portfolio/branches/master');
  const resJson = await res.json();

  return { lastCommit: resJson.commit.commit.author.date };
};

export default withLayout(Page);
