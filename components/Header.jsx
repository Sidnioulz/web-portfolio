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
      <Link href="https://github.com/Sidnioulz">
        <a>Software</a>
      </Link>
      <Link href="https://mupuf.org/blog/">
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
  </header>
);

export default Header;
