import Link from 'next/link';
import PropTypes from 'prop-types';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PostLink;
