import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PER_PAGE = 3;

export default function PortfolioSection() {
  const { t } = useLanguage();
  const portfolio = t('portfolio.items');
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(portfolio.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = portfolio.slice(start, start + PER_PAGE);

  return (
    <section className="section section-dark reveal" id="portfolio" data-nav-section="portfolio">
      <div className="section-heading section-heading-dark">
        <span className="eyebrow">{t('portfolio.eyebrow')}</span>
        <h2>{t('portfolio.title')}</h2>
        <p>{t('portfolio.subtitle')}</p>
      </div>

      <div className="portfolio-grid">
        {visible.map((item, index) => (
          <article key={item.title} className="portfolio-card perspective-card" data-tilt data-tilt-strength="6" style={{ '--stagger': `${index * 90}ms` }}>
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="portfolio-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a className="portfolio-link" href="/contact">
                {t('portfolio.cta')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="pagination">
          <button
            type="button"
            className="pagination-btn"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            <span className="material-symbols-outlined">chevron_left</span>
            {t('portfolio.prevPage')}
          </button>

          <span className="pagination-info">
            {t('portfolio.pageOf').replace('{{current}}', page + 1).replace('{{total}}', totalPages)}
          </span>

          <button
            type="button"
            className="pagination-btn"
            disabled={page >= totalPages - 1}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          >
            {t('portfolio.nextPage')}
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      ) : null}
    </section>
  );
}
