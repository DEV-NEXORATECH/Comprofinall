import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ navLinks }) {
  const { t, locale } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-cta">
        <div>
          <span className="eyebrow">{t('footer.ctaEyebrow')}</span>
          <h2>{t('footer.ctaTitle')}</h2>
        </div>
        <Link className="button button-primary button-magnetic" to="/contact">
          {t('footer.ctaButton')}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>

      <div className="footer-main">
        <div className="footer-about">
          <Link className="footer-brand" to="/" aria-label="Nexora Technology">
            <img className="brand-logo brand-logo-footer" src="/logonexora-navbar.png" alt="Nexora Technology" />
          </Link>
          <p>{t('footer.aboutText')}</p>
          <div className="social-row">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">{t('footer.socialLinkedin')}</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">{t('footer.socialInstagram')}</a>
            <a href="mailto:sales@nexora-technology.id">{t('footer.socialEmail')}</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>{t('footer.menuTitle')}</h3>
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>{link.label}</Link>
          ))}
        </div>

        <div className="footer-links">
          <h3>{t('footer.servicesTitle')}</h3>
          {locale.footer.servicesLinks.map((link) => (
            <Link key={link.pillar} to="/services" state={{ expandPillar: link.pillar }}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-contact">
          <h3>{t('footer.contactTitle')}</h3>
          <a href="https://www.nexora-technology.id" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined">language</span>
            www.nexora-technology.id
          </a>
          <a href="mailto:sales@nexora-technology.id">
            <span className="material-symbols-outlined">mail</span>
            sales@nexora-technology.id
          </a>
          <a href="mailto:admin@nexora-technology.id">
            <span className="material-symbols-outlined">mail</span>
            admin@nexora-technology.id
          </a>
          <p>Jl. Depok 17, Antapani, Bandung - Jawa Barat</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.tagline')}</p>
      </div>
    </footer>
  );
}
