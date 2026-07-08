import { useEffect } from 'react';

export function useTilt(dependency) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const elements = document.querySelectorAll('[data-tilt]');
    const cleanups = [];

    elements.forEach((element) => {
      const strength = Number(element.getAttribute('data-tilt-strength') || 6);
      let frame = 0;

      const move = (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          element.style.transform = `perspective(1000px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateY(-8px)`;
        });
      };

      const leave = () => {
        cancelAnimationFrame(frame);
        element.style.transform = '';
      };

      element.addEventListener('pointermove', move);
      element.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        element.removeEventListener('pointermove', move);
        element.removeEventListener('pointerleave', leave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [dependency]);
}
