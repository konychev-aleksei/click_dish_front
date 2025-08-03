import {
  type ReactNode,
  type ButtonHTMLAttributes,
  type CSSProperties,
} from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
import { Spinner } from '../Spinner/Spinner';

export type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  className?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  width,
  height,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        loading && styles.button_loading,
        className
      )}
      disabled={disabled || loading}
      style={{ width, height, ...style }}
      {...props}
    >
      {loading && <Spinner className={styles.spinner} />}
      {children}
    </button>
  );
};
