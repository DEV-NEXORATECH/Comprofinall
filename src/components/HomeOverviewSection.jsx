import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function HomeOverviewSection() {
  const { t } = useLanguage();
  const cards = t('homeOverview.cards');

  return (
    <section className="section home-overview reveal">
      <div className="section-heading">
        <span className="eyebrow">{t('homeOverview.eyebrow')}</span>
        <h2>{t('homeOverview.title')}</h2>
        <p>{t('homeOverview.subtitle')}</p>
      </div>

      <div className="home-overview-grid">
        {cards.map((card) => (
          <Link key={card.href} className="home-overview-card" to={card.href} data-tilt data-tilt-strength="4">
            <span className="material-symbols-outlined">{card.icon}</span>
            <div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
            <span className="material-symbols-outlined overview-arrow">arrow_forward</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
