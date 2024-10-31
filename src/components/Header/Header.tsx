import './Header.scss';
import githubLogo from '../../assets/logos/github.svg';

function Header() {
  return (
    <section className="header">
      <div className="header__logo"></div>
      <a href="https://github.com/justcabyr" target="_blank" rel="noopener noreferrer" className="header__logo-svg">
        <img src={githubLogo} alt="GitHub Logo" />
      </a>
    </section>
  );
}

export default Header;
