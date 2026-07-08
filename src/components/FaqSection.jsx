import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FaqSection() {
  const { t } = useLanguage();
  const faqs = t('faq.items');
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="section reveal" id="faq" data-nav-section="faq">
      <div className="section-heading center">
        <span className="eyebrow">{t('faq.eyebrow')}</span>
        <h2>{t('faq.title')}</h2>
        <p>{t('faq.subtitle')}</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = activeFaq === index;
          return (
            <article key={faq.q} className={`faq-item ${isOpen ? 'active' : ''}`}>
              <button
                type="button"
                className="faq-trigger"
                onClick={() => setActiveFaq(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className="material-symbols-outlined faq-icon">{isOpen ? 'remove' : 'add'}</span>
              </button>
              <div className="faq-panel" aria-hidden={!isOpen}>
                <p>{faq.a}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
