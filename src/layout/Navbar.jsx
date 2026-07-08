import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ menuOpen, scrolled, navLinks, sectionLabel, onToggleMenu, onCloseMenu }) {
  const { t, lang, toggleLang } = useLanguage();

  return (
    <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
      <Link className="brand" to="/" aria-label="Nexora Technology beranda" onClick={onCloseMenu}>
        <img className="brand-logo brand-logo-navbar" src="/logonexora-navbar.png" alt="Nexora Technology" />
      </Link>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label={t('nav.navLabel')}>
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            onClick={onCloseMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end={link.href === '/'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="topbar-actions">
        <button type="button" className="lang-toggle" onClick={toggleLang} aria-label={`Switch to ${lang === 'id' ? 'English' : 'Indonesian'}`}>
          {lang === 'id' ? 'EN' : 'ID'}
        </button>
        <span className="nav-section-chip">{sectionLabel}</span>
        <Link className="topbar-cta button-magnetic" to="/contact">
          {t('nav.cta')}
        </Link>
      </div>

      <button
        type="button"
        className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-label={t('nav.menuLabel')}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
