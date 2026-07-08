import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, description, primaryAction, secondaryAction, image, imageAlt }) {
  const renderAction = (action, className) => {
    if (!action) {
      return null;
    }

    if (action.href.startsWith('/')) {
      return (
        <Link className={className} to={action.href}>
          {action.label}
        </Link>
      );
    }

    return (
      <a className={className} href={action.href} target="_blank" rel="noreferrer">
        {action.label}
      </a>
    );
  };

  return (
    <section className="page-hero reveal perspective-card" data-tilt data-tilt-strength="3">
      <div className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          {renderAction(primaryAction, 'button button-primary')}
          {renderAction(secondaryAction, 'button button-secondary')}
        </div>
      </div>
      {image ? (
        <div className="page-hero-visual">
          <img src={image} alt={imageAlt || eyebrow} loading="lazy" />
        </div>
      ) : (
        <div className="page-hero-visual page-hero-visual-abstract" aria-hidden="true">
          <div className="abstract-n-mark">
            <span>N</span>
          </div>
        </div>
      )}
    </section>
  );
}
