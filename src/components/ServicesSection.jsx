import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesSection({ expandPillar }) {
  const { t } = useLanguage();
  const serviceCards = useMemo(() => t('services.cards'), [t]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (expandPillar) {
      const idx = serviceCards.findIndex((c) => c.title === expandPillar && c.isPillar);
      if (idx !== -1) {
        setExpandedIndex(idx);
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [expandPillar, serviceCards]);

  const relatedMap = {};
  serviceCards.forEach((card) => {
    if (card.related) {
      relatedMap[card.title] = card.related
        .map((name) => serviceCards.find((c) => c.title === name))
        .filter(Boolean);
    }
  });

  return (
    <section className="section section-muted reveal" id="services" data-nav-section="services">
      <div className="section-heading center">
        <span className="eyebrow">{t('services.eyebrow')}</span>
        <h2>{t('services.title')}</h2>
        <p>{t('services.subtitle')}</p>
      </div>

      <div className="services-grid">
        {serviceCards.map((card, index) => {
          const isExpanded = expandedIndex === index;
          const isPillar = card.isPillar;
          const related = relatedMap[card.title] || [];

          return (
            <article
              key={card.title}
              className={`service-card tone-${card.tone}${isExpanded ? ' expanded' : ''}${isPillar ? ' pillar-card' : ''} perspective-card`}
              {...(isPillar ? {} : { 'data-tilt': '', 'data-tilt-strength': '7' })}
              style={{ '--stagger': `${index * 70}ms` }}
              onClick={() => isPillar && toggleCard(index)}
              role={isPillar ? 'button' : undefined}
              tabIndex={isPillar ? 0 : undefined}
              onKeyDown={isPillar ? (e) => { if (e.key === 'Enter' || e.key === ' ') toggleCard(index); } : undefined}
            >
              <div className="service-body">
                <div className="service-head">
                  <span className="material-symbols-outlined service-icon">{card.icon}</span>
                  {card.tag ? <span className="service-tag">{card.tag}</span> : null}
                  {isPillar ? (
                    <span className={`service-expand-icon${isExpanded ? ' open' : ''}`}>
                      <span className="material-symbols-outlined">expand_more</span>
                    </span>
                  ) : null}
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                {card.bullets ? (
                  <ul>
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>
                        <span className="material-symbols-outlined">check</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {card.cta ? (
                  <Link to="/contact" className="service-link">
                    {card.cta}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                ) : null}

                {isPillar ? (
                  <div className={`service-detail${isExpanded ? ' open' : ''}`}>
                    <div className="service-detail-inner">
                      <p className="service-detail-text">{card.detail}</p>
                      {related.length > 0 ? (
                        <div className="service-related">
                          <span className="service-related-label">{t('services.relatedLabel')}</span>
                          <div className="service-related-chips">
                            {related.map((r) => (
                              <span key={r.title} className={`service-related-chip tone-${r.tone}`}>
                                <span className="material-symbols-outlined">{r.icon}</span>
                                {r.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
