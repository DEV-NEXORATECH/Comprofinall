export default function TiltCard({ as: Component = 'article', strength = 6, className = '', children, ...props }) {
  return (
    <Component className={`perspective-card ${className}`.trim()} data-tilt data-tilt-strength={strength} {...props}>
      {children}
    </Component>
  );
}
