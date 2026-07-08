import { useEffect } from 'react';

export function useMousePosition(targetRef) {
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return undefined;

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        target.style.setProperty('--pointer-x', `${event.clientX}px`);
        target.style.setProperty('--pointer-y', `${event.clientY}px`);
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, [targetRef]);
}
