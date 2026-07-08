import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function Counter({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const start = performance.now();
    const duration = 1200;

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = value * eased;
      setDisplayValue(suffix === '/7' ? 24 : Number(nextValue.toFixed(1)));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [suffix, value]);

  const formattedValue = suffix === '/7' ? '24' : displayValue % 1 === 0 ? `${displayValue}` : displayValue.toFixed(1);

  return (
    <strong>
      {formattedValue}
      {suffix}
    </strong>
  );
}

export default function ProofSection() {
  const { t } = useLanguage();
  const stats = t('proof.stats');
  const differences = t('proof.differences');

  return (
    <section className="section section-bright reveal" data-nav-section="proof">
      <div className="split-section">
        <div className="metrics-panel">
          {stats.map((item, index) => (
            <div key={item.label} className={`metric metric-${index % 2 === 0 ? 'large' : 'small'} perspective-card`} data-tilt data-tilt-strength="5">
              <Counter value={item.value} suffix={item.suffix} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="difference-panel">
          <span className="eyebrow">{t('proof.eyebrow')}</span>
          <h2>{t('proof.title')}</h2>
          <div className="difference-list">
            {differences.map((item) => (
              <div key={item.title} className="difference-item">
                <span className="material-symbols-outlined">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
