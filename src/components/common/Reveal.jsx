export default function Reveal({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={`reveal ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
