import { useLanguage } from '../context/LanguageContext';
import ContactSection from '../components/ContactSection';
import DetailSection from '../components/DetailSection';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  const { t } = useLanguage();
  const hero = t('contactPage.hero');
  const detail = t('contactPage.detail');

  return (
    <main>
      <PageHero
        eyebrow={hero.eyebrow}
        title={<>{hero.title}</>}
        description={hero.subtitle}
        primaryAction={{ label: hero.primaryCta, href: 'mailto:sales@nexora-technology.id' }}
        secondaryAction={{ label: hero.secondaryCta, href: 'https://www.nexora-technology.id' }}
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
        imageAlt={hero.imageAlt}
      />
      <DetailSection
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.subtitle}
        items={detail.items}
        media={{
          src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80',
          alt: detail.imageAlt,
        }}
      />
      <ContactSection />
    </main>
  );
}
