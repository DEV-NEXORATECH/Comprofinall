import { useLanguage } from '../context/LanguageContext';
import DetailSection from '../components/DetailSection';
import FaqSection from '../components/FaqSection';
import PageHero from '../components/PageHero';

export default function FaqPage() {
  const { t } = useLanguage();
  const hero = t('faqPage.hero');
  const detail = t('faqPage.detail');

  return (
    <main>
      <PageHero
        eyebrow={hero.eyebrow}
        title={<>{hero.title}</>}
        description={hero.subtitle}
        primaryAction={{ label: hero.primaryCta, href: '/contact' }}
        secondaryAction={{ label: hero.secondaryCta, href: '/services' }}
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
        imageAlt={hero.imageAlt}
      />
      <DetailSection
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.subtitle}
        items={detail.items}
        media={{
          src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80',
          alt: detail.imageAlt,
        }}
        reversed
      />
      <FaqSection />
    </main>
  );
}
