import 'sass/components/Header.scss';
import Link from 'next/link';

const Header = () => (
  <div className="Header">
    <h1>
      <Link href="/">
        <a><img className="logo" src="static/images/logo/logo-1x.png" alt="Steve D. Lazaro" /></a>
      </Link>
    </h1>
    <nav>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="/software">
        <a>Software</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/publications">
        <a>Publications</a>
      </Link>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  </div>
);

export default Header;
