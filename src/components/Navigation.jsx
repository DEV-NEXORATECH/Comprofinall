import { Link } from 'react-router-dom';

const scrollToSection = (href) => (event) => {
  event.preventDefault();
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Navigation({ menuOpen, scrolled, navLinks, sectionLabel, onToggleMenu, onCloseMenu }) {
  const handleNavClick = (href) => (event) => {
    onCloseMenu();
    scrollToSection(href)(event);
  };

  return (
    <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={handleNavClick('#home')} aria-label="Nexora Technology beranda">
        <span className="brand-mark" aria-hidden="true">N</span>
        <span className="brand-text">
          Nexora
          <small>Technology</small>
        </span>
      </a>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Navigasi utama">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleNavClick(link.href)}
            className={sectionLabel === link.label ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="topbar-actions">
        <span className="nav-section-chip">{sectionLabel}</span>
        <a className="topbar-cta button-magnetic" href="#contact" onClick={handleNavClick('#contact')}>
          Konsultasi Gratis
        </a>
      </div>

      <button
        type="button"
        className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-label="Buka menu navigasi"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
