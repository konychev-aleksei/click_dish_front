import {
  Link as RRDLink,
  type LinkProps as RRDLinkProps,
} from 'react-router-dom';
import cn from 'classnames';
import styles from './Link.module.scss';

export type AppLinkVariant = 'primary' | 'secondary';

type LinkProps = {
  className?: string;
  variant?: AppLinkVariant;
  underline?: boolean;
  disabled?: boolean;
} & RRDLinkProps;

export const Link = ({
  to,
  className,
  children,
  variant = 'primary',
  underline = false,
  disabled = false,
  ...rest
}: LinkProps) => {
  return (
    <RRDLink
      to={disabled ? '#' : to}
      className={cn(
        styles.appLink,
        styles[variant],
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
