import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const testimonials = t('testimonials.items');
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!testimonials.length) return undefined;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="section section-testimonials reveal" data-nav-section="testimonials">
      <div className="section-heading center">
        <span className="eyebrow">{t('testimonials.eyebrow')}</span>
        <h2>{t('testimonials.title')}</h2>
        <p>{t('testimonials.subtitle')}</p>
      </div>

      <div className="testimonial-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.name}
            className="testimonial-card"
            initial={reduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(6px)' }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12, filter: 'blur(6px)' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="testimonial-quote-mark">&ldquo;</div>
            <p>{activeTestimonial.quote}</p>
            <div className="testimonial-person">
              <strong>{activeTestimonial.name}</strong>
              <span>{activeTestimonial.role}</span>
              <em>{activeTestimonial.company}</em>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-dots" aria-label="Testimonial navigation">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
              aria-label={`Lihat testimonial dari ${testimonial.name}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
