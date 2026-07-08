import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero not-found-hero reveal">
        <div className="page-hero-copy">
          <span className="eyebrow">{t('notFound.code')}</span>
          <h1>{t('notFound.title')}</h1>
          <p>{t('notFound.subtitle')}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/">
              {t('notFound.primaryCta')}
            </Link>
            <Link className="button button-secondary" to="/contact">
              {t('notFound.secondaryCta')}
            </Link>
          </div>
        </div>
        <div className="page-hero-visual page-hero-visual-abstract not-found-visual" aria-hidden="true">
          <div className="abstract-n-mark abstract-n-large">
            <span>N</span>
          </div>
        </div>
      </section>
    </main>
  );
}
