export default function DetailSection({ eyebrow, title, description, items, media, reversed = false }) {
  return (
    <section className={`section detail-section reveal ${reversed ? 'detail-section-reversed' : ''}`}>
      <div className="detail-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="detail-grid">
          {items.map((item) => (
            <article key={item.title} className="detail-card" data-tilt data-tilt-strength="4">
              <span className="material-symbols-outlined">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {media ? (
        <div className="detail-media" data-tilt data-tilt-strength="3">
          <img src={media.src} alt={media.alt} loading="lazy" />
        </div>
      ) : null}
    </section>
  );
}
