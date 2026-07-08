import { useEffect } from 'react';

export function useMagneticButton(dependency) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const buttons = document.querySelectorAll('.button-magnetic');
    const cleanups = [];

    buttons.forEach((button) => {
      let frame = 0;

      const move = (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px) scale(1.02)`;
        });
      };

      const leave = () => {
        cancelAnimationFrame(frame);
        button.style.transform = '';
      };

      button.addEventListener('pointermove', move);
      button.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        button.removeEventListener('pointermove', move);
        button.removeEventListener('pointerleave', leave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [dependency]);
}
