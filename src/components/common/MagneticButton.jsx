import Button from './Button';

export default function MagneticButton({ className = '', ...props }) {
  return <Button className={`button-magnetic ${className}`.trim()} {...props} />;
}
