import Link from 'next/link';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';

// TODO move this to style utils!
function figmaRgbToString(obj) {
  return `rgba(${obj.r * 255}, ${obj.g * 255}, ${obj.b * 255}, ${obj.a})`;
}

// https://www.w3.org/TR/AERT/#color-contrast
function fgColorForBg(bg) {
  const brightness = Math.round((parseInt(bg.r * 255, 10) * 299
      + parseInt(bg.g * 255, 10) * 587
      + parseInt(bg.b * 255, 10) * 114)
    / 1000);
  return (brightness > 125) ? '#222' : '#eee';
}

const StyleLink = props => (
  <li>
    <Link href="/figma-style/[key]" as={`/figma-style/${props.style.key}`}>
      <a>
        {props.style.name}
      </a>
    </Link>
    <style jsx>
      {`
      li {
        list-style: none;
        margin: 0;
        height: 36px;
      }

      a {
        background-color: ${figmaRgbToString(props.style.fill)};
        color: ${fgColorForBg(props.style.fill)};
        display: inline-block;
        font-family: 'Museo Sans';
        line-height: 24px;
        padding: 6px;
        text-align: center;
        text-decoration: none;
        width: 200px;
      }

      a:hover {
        opacity: 0.6;
      }
    `}
    </style>
  </li>
);

StyleLink.propTypes = {
  style: PropTypes.shape({
    key: PropTypes.string.isRequired,
    fill: ExtraPropTypes.color.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default StyleLink;
