import Link from 'next/link';
import PortfolioPropTypes from 'data/portfolio-prop-types';

const TalkLink = props => (
  <li>
    <Link href="/talk/[key]" as={`/talk/${props.publication.key}`}>
      <a>
        {props.publication.title}
      </a>
    </Link>
  </li>
);

TalkLink.propTypes = {
  publication: PortfolioPropTypes.publication.isRequired,
};

export default TalkLink;
