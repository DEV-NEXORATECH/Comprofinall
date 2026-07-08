import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import SiteLayout from './layout/SiteLayout';
import AppRoutes from './routes/AppRoutes';
import { useMagneticButton } from './hooks/useMagneticButton';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useTilt } from './hooks/useTilt';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { locale } = useLanguage();
  const navLinks = locale.nav.links;
  useScrollReveal(location.pathname);
  useTilt(location.pathname);
  useMagneticButton(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <SiteLayout
      scrolled={scrolled}
      menuOpen={menuOpen}
      navLinks={navLinks}
      onToggleMenu={() => setMenuOpen((value) => !value)}
      onCloseMenu={() => setMenuOpen(false)}
    >
      <AppRoutes />
    </SiteLayout>
  );
}

export default App;
