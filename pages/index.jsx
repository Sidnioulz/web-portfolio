import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import withLayout from 'components/_layout';
import ShowLink from 'components/links/ShowLink';

const Index = props => (
  <>
    <h1>Steve Dodier-Lazaro</h1>
    <ul>
      {props.shows.map(show => (
        <ShowLink key={show.id} id={show.id} name={show.name} />
      ))}
    </ul>
    <style jsx>
      {`
        h1,
        a {
          font-family: 'Baloo';
          font-weight: normal;
          background-color: lavender;
          color: purple;
        }

        ul {
          padding: 0;
        }
      `}
    </style>
  </>
);

Index.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

Index.defaultProps = {
  shows: [],
};

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=squirrel');
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show),
  };
};


export default withLayout(Index);
