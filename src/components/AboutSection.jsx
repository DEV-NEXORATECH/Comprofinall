import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-bright reveal" id="about" data-nav-section="about">
      <div className="section-heading section-heading-wide">
        <span className="eyebrow">{t('about.eyebrow')}</span>
        <h2>{t('about.title')}</h2>
        <p>{t('about.subtitle')}</p>
      </div>

      <div className="about-grid">
        <article className="info-card perspective-card" data-tilt data-tilt-strength="6">
          <span className="material-symbols-outlined info-icon">visibility</span>
          <h3>{t('about.visi.title')}</h3>
          <p>{t('about.visi.desc')}</p>
        </article>
        <article className="info-card perspective-card" data-tilt data-tilt-strength="6">
          <span className="material-symbols-outlined info-icon">rocket_launch</span>
          <h3>{t('about.misi.title')}</h3>
          <p>{t('about.misi.desc')}</p>
        </article>
      </div>
    </section>
  );
}
