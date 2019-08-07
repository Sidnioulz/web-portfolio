import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import withLayout from 'components/_layout';
import StyleLink from 'components/links/StyleLink';

// TODO move this to style utils!
// function componentToHex(c) {
//   const hex = c.toString(16);
//   return hex.length === 1 ? `0${hex}` : hex;
// }
//
// function rgbToHex(r, g, b, isFloat = true) {
//   return `#${
//     componentToHex(r * isFloat ? 255 : 1)}${
//     componentToHex(g * isFloat ? 255 : 1)}${
//     componentToHex(b * isFloat ? 255 : 1)}`;
// }
// TODO util text-color-for-bg https://www.w3.org/TR/AERT/#color-contrast


const Index = props => (
  <>
    <h1>Steve Dodier-Lazaro</h1>
    <p>The colours below are directly extracted from the Figma file containing my design system.</p>
    <ul>
      {props.styles.map(styleDef => (
        <StyleLink key={styleDef.key} style={styleDef} />
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
  styles: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    node_id: PropTypes.string.isRequired,
    style_type: PropTypes.oneOf(['TEXT', 'FILL']).isRequired,
    description: PropTypes.string,
  })),
};

Index.defaultProps = {
  styles: [],
};

Index.getInitialProps = async function () {
  const res = await fetch('https://api.figma.com/v1/teams/711400914227417571/styles?page_size=100', {
    headers: {
      'X-FIGMA-TOKEN': process.env.FIGMA_TOKEN,
    },
  });
  const resJson = await res.json();

  const { styles } = resJson.meta;
  const files = Array.from(new Set(styles.map(s => s.file_key)));

  const nodeRes = {};
  await Promise.all(files.map(async (fileKey) => {
    const nodeIds = styles
      .filter(s => s.file_key === fileKey)
      .filter(style => style.style_type === 'FILL')
      .map(s => s.node_id)
      .join(',');

    if (nodeIds) {
      const fetchRes = await fetch(`https://api.figma.com/v1/files/${fileKey}/nodes?ids=${nodeIds}`, {
        headers: {
          'X-FIGMA-TOKEN': process.env.FIGMA_TOKEN,
        },
      });
      const json = await fetchRes.json();

      nodeRes[fileKey] = json.nodes;
    }
  }));

  // const nodeStyles = nodeResJsons.map(j => j.nodes).flat();
  //
  // console.log(nodeStyles);


  return {
    styles: styles
      .filter(style => style.style_type === 'FILL')
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(style => ({
        key: style.key,
        name: style.name,
        // only support one layer
        fill: nodeRes[style.file_key][style.node_id].document.fills[0].color,
      })),
  };
};


export default withLayout(Index);
