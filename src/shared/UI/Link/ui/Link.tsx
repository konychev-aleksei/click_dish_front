import type { MouseEvent } from 'react';
import {
  Link as RRDLink,
  useLocation,
  type LinkProps as RRDLinkProps,
} from 'react-router-dom';
import cn from 'classnames';
import styles from './Link.module.scss';

export type AppLinkVariant = 'primary' | 'secondary';

type LinkProps = {
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  size?: 's' | 'm' | 'l';
  variant?: AppLinkVariant;
  underline?: boolean;
  disabled?: boolean;
} & RRDLinkProps;

export const Link = ({
  to,
  onClick = () => {},
  className,
  children,
  size = 'm',
  variant = 'primary',
  underline = false,
  disabled = false,
  ...rest
}: LinkProps) => {
  const location = useLocation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick(e);

    if (typeof to !== 'string') {
      return;
    }

    const hash = to.startsWith('#') ? to.slice(1) : null;
    if (hash) {
      e.preventDefault();
      if (location.hash !== to) {
        window.history.pushState(null, '', to);
      }
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <RRDLink
      to={disabled ? '#' : to}
      onClick={handleClick}
      className={cn(
        styles.link,
        styles[variant],
        styles[size],
        {
          [styles.underline]: underline,
          [styles.disabled]: disabled,
        },
        className
      )}
      {...rest}
    >
      {children}
    </RRDLink>
  );
};
