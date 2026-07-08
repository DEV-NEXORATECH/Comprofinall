import { useCounter } from '../../hooks/useCounter';

export default function AnimatedCounter({ value, suffix = '' }) {
  const current = useCounter(value);
  const output = suffix === '/7' ? '24' : current % 1 === 0 ? `${Math.round(current)}` : current.toFixed(1);

  return (
    <strong>
      {output}
      {suffix}
    </strong>
  );
}
