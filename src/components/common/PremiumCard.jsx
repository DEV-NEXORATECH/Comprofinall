export default function PremiumCard({ as: Component = 'article', className = '', children, ...props }) {
  return (
    <Component className={`premium-card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
