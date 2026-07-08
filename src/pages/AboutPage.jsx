import { useLanguage } from '../context/LanguageContext';
import AboutSection from '../components/AboutSection';
import DetailSection from '../components/DetailSection';
import PageHero from '../components/PageHero';

export default function AboutPage() {
  const { t } = useLanguage();
  const hero = t('aboutPage.hero');
  const detail = t('aboutPage.detail');

  return (
    <main>
      <PageHero
        eyebrow={hero.eyebrow}
        title={<>{hero.title}</>}
        description={hero.subtitle}
        primaryAction={{ label: hero.primaryCta, href: '/services' }}
        secondaryAction={{ label: hero.secondaryCta, href: '/contact' }}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
        imageAlt={hero.imageAlt}
      />
      <DetailSection
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.subtitle}
        items={detail.items}
        media={{
          src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80',
          alt: detail.imageAlt,
        }}
      />
      <AboutSection />
    </main>
  );
}
