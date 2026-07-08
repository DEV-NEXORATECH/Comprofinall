import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();
  const [billingMode, setBillingMode] = useState('project');

  const plans = t('pricing.plans');

  const billingLabel = useMemo(() => (billingMode === 'project' ? t('pricing.toggleProject') : t('pricing.toggleMonthly')), [billingMode, t]);

  return (
    <section className="section reveal" id="pricing" data-nav-section="pricing">
      <div className="section-heading center">
        <span className="eyebrow">{t('pricing.eyebrow')}</span>
        <h2>{t('pricing.title')}</h2>
        <p>{t('pricing.subtitle')}</p>
      </div>

      <div className="pricing-toggle" role="tablist" aria-label="Pricing mode">
        <button type="button" className={billingMode === 'project' ? 'active' : ''} onClick={() => setBillingMode('project')}>
          {t('pricing.toggleProject')}
        </button>
        <button type="button" className={billingMode === 'monthly' ? 'active' : ''} onClick={() => setBillingMode('monthly')}>
          {t('pricing.toggleMonthly')}
        </button>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article key={plan.name} className={`pricing-card perspective-card ${plan.featured ? 'featured' : ''}`} data-tilt data-tilt-strength="5">
            {plan.featured ? <span className="pricing-badge">{t('pricing.badge')}</span> : null}
            <h3>{plan.name}</h3>
            <div className="pricing-value">
              {billingMode === 'project' ? plan.projectPrice : plan.monthlyPrice}
              <span>{billingMode === 'project' ? plan.period : plan.monthlyPeriod}</span>
            </div>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="material-symbols-outlined">check</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button type="button" className={`button ${plan.featured ? 'button-primary' : 'button-secondary'} button-full`}>
              {t('pricing.button')}
            </button>
          </article>
        ))}
      </div>

      <p className="pricing-note">{t('pricing.note').replace('{{mode}}', billingLabel)}</p>
    </section>
  );
}
