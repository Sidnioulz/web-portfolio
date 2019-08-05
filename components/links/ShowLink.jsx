import Link from 'next/link';
import PropTypes from 'prop-types';

const ShowLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.name}</a>
    </Link>
    <style jsx>
      {`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}
    </style>
  </li>
);

ShowLink.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ShowLink;
