import { useEffect, useState } from 'react';

export function useActiveSection(defaultLabel = 'Beranda') {
  const [activeSection, setActiveSection] = useState(defaultLabel);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-nav-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.getAttribute('data-nav-section') || defaultLabel);
        }
      },
      { threshold: [0.22, 0.45, 0.68] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [defaultLabel]);

  return activeSection;
}
