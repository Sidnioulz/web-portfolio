import css from 'sass/components/Header.scss';
import Link from 'next/link';

const Header = props => (
  <header className={`${props.className ? `${props.className} ` : ''}${css.Header}`}>
    <div className={css.logoContainer}>
      <Link href="/">
        <a><img className={css.logo} src="/static/images/logo/logo-1x.png" alt="Steve D. Lazaro" /></a>
      </Link>
    </div>
    <nav>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <a href="https://github.com/Sidnioulz">Software</a>
      <a href="https://mupuf.org/blog/">Blog</a>
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
  </header>
);

export default Header;
