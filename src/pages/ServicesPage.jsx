import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import DetailSection from '../components/DetailSection';
import PageHero from '../components/PageHero';
import ServicesSection from '../components/ServicesSection';

export default function ServicesPage() {
  const location = useLocation();
  const { t } = useLanguage();
  const expandPillar = location.state?.expandPillar || null;
  const hero = t('servicesPage.hero');
  const detail = t('servicesPage.detail');

  return (
    <main>
      <PageHero
        eyebrow={hero.eyebrow}
        title={<>{hero.title}</>}
        description={hero.subtitle}
        primaryAction={{ label: hero.primaryCta, href: '/contact' }}
        secondaryAction={{ label: hero.secondaryCta, href: '/portfolio' }}
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
        imageAlt={hero.imageAlt}
      />
      <DetailSection
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.subtitle}
        items={detail.items}
        media={{
          src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80',
          alt: detail.imageAlt,
        }}
        reversed
      />
      <ServicesSection expandPillar={expandPillar} />
    </main>
  );
}
