import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Footer from './Footer';
import Navbar from './Navbar';
import PointerGlow from './PointerGlow';
import ScrollProgress from './ScrollProgress';

export default function SiteLayout({ children, scrolled, menuOpen, navLinks, onToggleMenu, onCloseMenu }) {
  const layoutRef = useRef(null);
  const location = useLocation();
  const { t } = useLanguage();
  const [sectionLabel, setSectionLabel] = useState('Beranda');

  const routeLabel = useMemo(() => {
    if (location.pathname === '/') return t('nav.routeLabels./');
    return navLinks.find((link) => link.href === location.pathname)?.label || 'Nexora';
  }, [location.pathname, navLinks, t]);

  useEffect(() => {
    const root = layoutRef.current;
    if (!root) return undefined;

    let pointerFrame = 0;

    const handlePointerMove = (event) => {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = window.requestAnimationFrame(() => {
        root.style.setProperty('--pointer-x', `${event.clientX}px`);
        root.style.setProperty('--pointer-y', `${event.clientY}px`);
      });
    };

    const handleScrollProgress = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll-progress', `${maxScroll > 0 ? window.scrollY / maxScroll : 0}`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    setSectionLabel(routeLabel);
    handleScrollProgress();

    return () => {
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScrollProgress);
    };
  }, [routeLabel]);

  return (
    <div className="app-shell" ref={layoutRef}>
      <ScrollProgress />
      <PointerGlow />
      <Navbar
        menuOpen={menuOpen}
        scrolled={scrolled}
        navLinks={navLinks}
        sectionLabel={sectionLabel}
        onToggleMenu={onToggleMenu}
        onCloseMenu={onCloseMenu}
      />
      {children}
      <Footer navLinks={navLinks} />
    </div>
  );
}
