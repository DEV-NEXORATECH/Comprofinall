import { Link } from 'react-router-dom';

export default function Button({ children, href, to, variant = 'primary', className = '', ...props }) {
  const classes = `button ${variant === 'outline' ? 'button-secondary' : 'button-primary'} ${className}`.trim();

  if (to) {
    return <Link className={classes} to={to} {...props}>{children}</Link>;
  }

  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>;
  }

  return <button type="button" className={classes} {...props}>{children}</button>;
}
