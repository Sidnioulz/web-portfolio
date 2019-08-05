// Example of dynamic page.

import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import withLayout from 'components/_layout';

const Post = props => (
  <>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} alt="" />
  </>
);

Post.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.shape({
      medium: PropTypes.string,
    }),
  }).isRequired,
};

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default withLayout(Post);
