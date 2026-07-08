import { useLanguage } from '../context/LanguageContext';
import DetailSection from '../components/DetailSection';
import PageHero from '../components/PageHero';
import PortfolioSection from '../components/PortfolioSection';

export default function PortfolioPage() {
  const { t } = useLanguage();
  const hero = t('portfolioPage.hero');
  const detail = t('portfolioPage.detail');

  return (
    <main>
      <PageHero
        eyebrow={hero.eyebrow}
        title={<>{hero.title}</>}
        description={hero.subtitle}
        primaryAction={{ label: hero.primaryCta, href: '/contact' }}
        secondaryAction={{ label: hero.secondaryCta, href: '/faq' }}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
        imageAlt={hero.imageAlt}
      />
      <DetailSection
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.subtitle}
        items={detail.items}
        media={{
          src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
          alt: detail.imageAlt,
        }}
      />
      <PortfolioSection />
    </main>
  );
}
