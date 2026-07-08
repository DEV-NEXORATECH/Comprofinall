import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const timerRef = useRef(null);
  const officeAddress = 'Jl. Depok 17, Antapani, Bandung, Jawa Barat';
  const mapsQuery = encodeURIComponent(officeAddress);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: t('contact.form.subjectOptions')[0],
    channel: 'whatsapp',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    if (status === 'error') setStatus('idle');
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = t('contact.form.errors.name');
    if (!formData.email.trim()) nextErrors.email = t('contact.form.errors.email');
    if (!formData.message.trim()) nextErrors.message = t('contact.form.errors.message');
    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(validateForm()).length > 0) {
      setStatus('error');
      setFeedback(t('contact.form.errors.general'));
      return;
    }

    setStatus('sending');
    setFeedback(t('contact.form.messages.sending'));

    const message = [
      `Halo Nexora, saya ${formData.name || 'mau konsultasi'}.`,
      `Email: ${formData.email || '-'}`,
      `Telepon: ${formData.phone || '-'}`,
      `Subjek: ${formData.subject}`,
      '',
      formData.message || 'Saya ingin berdiskusi lebih lanjut tentang kebutuhan proyek saya.',
    ].join('\n');

    timerRef.current = window.setTimeout(() => {
      setStatus('success');

      if (formData.channel === 'email') {
        const mailto = new URL('mailto:admin@nexora-technology.id');
        mailto.searchParams.set('subject', `Konsultasi Nexora - ${formData.subject}`);
        mailto.searchParams.set('body', message);
        window.location.href = mailto.toString();
        setFeedback(t('contact.form.messages.emailReady'));
        return;
      }

      const mailto = new URL('mailto:sales@nexora-technology.id');
      mailto.searchParams.set('subject', `Konsultasi Nexora - ${formData.subject}`);
      mailto.searchParams.set('body', message);
      window.location.href = mailto.toString();
      setFeedback(t('contact.form.messages.salesReady'));
    }, 250);
  };

  const contactDetails = t('contact.details');

  return (
    <section className="section section-contact reveal" id="contact" data-nav-section="contact">
      <div className="section-heading center">
        <span className="eyebrow">{t('contact.eyebrow')}</span>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </div>

      <div className="contact-grid">
        <form className="contact-form perspective-card" data-tilt data-tilt-strength="4" onSubmit={handleSubmit}>
          <div className={`form-feedback ${status}`} aria-live="polite">
            <span className="material-symbols-outlined">{status === 'error' ? 'warning' : status === 'sending' ? 'hourglass_top' : 'done_all'}</span>
            <p>{feedback || t('contact.form.feedback')}</p>
          </div>

          <div className="form-row">
            <label>
              {t('contact.form.nameLabel')}
              <input className={errors.name ? 'input-error' : ''} type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.form.namePlaceholder')} aria-invalid={Boolean(errors.name)} required />
              {errors.name ? <span className="field-error">{errors.name}</span> : null}
            </label>
            <label>
              {t('contact.form.emailLabel')}
              <input className={errors.email ? 'input-error' : ''} type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('contact.form.emailPlaceholder')} aria-invalid={Boolean(errors.email)} required />
              {errors.email ? <span className="field-error">{errors.email}</span> : null}
            </label>
          </div>
          <label>
            {t('contact.form.phoneLabel')}
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('contact.form.phonePlaceholder')} />
          </label>
          <label>
            {t('contact.form.subjectLabel')}
            <select name="subject" value={formData.subject} onChange={handleChange}>
              {t('contact.form.subjectOptions').map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </label>
          <label>
            {t('contact.form.channelLabel')}
            <div className="channel-switch">
              <button type="button" className={formData.channel === 'whatsapp' ? 'active' : ''} onClick={() => setFormData((current) => ({ ...current, channel: 'whatsapp' }))}>
                {t('contact.form.channelSales')}
              </button>
              <button type="button" className={formData.channel === 'email' ? 'active' : ''} onClick={() => setFormData((current) => ({ ...current, channel: 'email' }))}>
                {t('contact.form.channelAdmin')}
              </button>
            </div>
          </label>
          <label>
            {t('contact.form.messageLabel')}
            <textarea className={errors.message ? 'input-error' : ''} name="message" rows="5" value={formData.message} onChange={handleChange} placeholder={t('contact.form.messagePlaceholder')} aria-invalid={Boolean(errors.message)} required />
            {errors.message ? <span className="field-error">{errors.message}</span> : null}
          </label>
          <button type="submit" className="button button-primary button-full" disabled={status === 'sending'}>
            <span className="material-symbols-outlined">{status === 'sending' ? 'autorenew' : 'send'}</span>
            {status === 'sending' ? t('contact.form.sending') : formData.channel === 'email' ? t('contact.form.sendAdmin') : t('contact.form.sendSales')}
          </button>
        </form>

        <div className="contact-panel perspective-card" data-tilt data-tilt-strength="4">
          <h3>{t('contact.panel.title')}</h3>
          <div className="contact-list">
            {contactDetails.map((item) => (
              <div key={item.title} className="contact-item">
                <span className="material-symbols-outlined">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-actions">
            <a href="https://www.nexora-technology.id" className="button button-secondary" target="_blank" rel="noreferrer">
              {t('contact.panel.website')}
            </a>
            <a href="mailto:sales@nexora-technology.id" className="button button-secondary">
              {t('contact.panel.sendEmail')}
            </a>
          </div>
          <div className="contact-map">
            <iframe
              title="Lokasi kantor Nexora Technology"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined">map</span>
              {t('contact.panel.mapLink')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
