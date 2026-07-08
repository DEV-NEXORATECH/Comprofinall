import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const floatingCards = t('hero.floatingCards');

  return (
    <section className="hero reveal" id="home" data-nav-section="home">
      <div className="hero-copy">
        <span className="eyebrow">{t('hero.eyebrow')}</span>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <div className="hero-actions">
          <Link className="button button-primary button-magnetic" to="/contact">
            {t('hero.primaryCta')}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link className="button button-secondary button-magnetic" to="/services">
            {t('hero.secondaryCta')}
          </Link>
        </div>
        <div className="trusted-row" aria-label="Trust summary">
          <div>
            <strong>{t('hero.trustedLabel')}</strong>
            <span>{t('hero.trustedDesc')}</span>
          </div>
          <div>
            <strong>{t('hero.ownershipLabel')}</strong>
            <span>{t('hero.ownershipDesc')}</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-label="Nexora software dashboard">
        <div className="dashboard-3d" data-tilt data-tilt-strength="9">
          <div className="mock-window">
            <div className="mock-top">
              <span />
              <span />
              <span />
              <b>Nexora Ops</b>
            </div>
            <div className="mock-body">
              <aside className="mock-sidebar">
                <i />
                <i />
                <i />
                <i />
              </aside>
              <main className="mock-main">
                <div className="mock-kpis">
                  <div><strong>84%</strong><span>Workflow</span></div>
                  <div><strong>12k</strong><span>Records</span></div>
                  <div><strong>24/7</strong><span>Support</span></div>
                </div>
                <div className="mock-chart">
                  <span style={{ '--h': '34%' }} />
                  <span style={{ '--h': '58%' }} />
                  <span style={{ '--h': '45%' }} />
                  <span style={{ '--h': '78%' }} />
                  <span style={{ '--h': '64%' }} />
                  <span style={{ '--h': '88%' }} />
                </div>
                <div className="mock-list">
                  <p><span /> Approval workflow synced</p>
                  <p><span /> API gateway connected</p>
                  <p><span /> Security check passed</p>
                </div>
              </main>
            </div>
          </div>
        </div>

        {floatingCards.map((card) => (
          <div key={card.label} className={`hero-float ${card.className}`}>
            <span className="material-symbols-outlined">{card.icon}</span>
            {card.label}
          </div>
        ))}
      </div>
    </section>
  );
}
