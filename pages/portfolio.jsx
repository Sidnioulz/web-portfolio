import Link from 'next/link';
import PortfolioHead from 'components/PortfolioHead';

const Portfolio = () => (
  <>
    <PortfolioHead title="Download my PDF Portfolio">
      <meta name="robots" content="noindex,nofollow" />
    </PortfolioHead>
    <p>
      {'Download a case study of my latest product redesign in '}
      <a href="/static/files/Dodier-Lazaro_Portfolio_PRINT.pdf">print quality</a>
      {' or '}
      <a href="/static/files/Dodier-Lazaro_Portfolio_SCREEN.pdf">screen quality</a>
    </p>

    <ul>
      <li key="supply-chain-app-redesign">
        <Link href="/project/supply-chain-app-redesign">
          <a>App Redesign &ndash; Supply Chain Data Collection App</a>
        </Link>
      </li>
      <li key="cosmetic-for-importers">
        <Link href="/project/cosmetic-for-importers">
          <a>Supporting Cosmetics Importers in a Regulatory App for Toxicologists</a>
        </Link>
      </li>
    </ul>
  </>
);

export default Portfolio;
