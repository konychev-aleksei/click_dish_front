import { type ReactNode } from 'react';
import cn from 'classnames';
import styles from './IconButton.module.scss';

type IconButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const IconButton = ({
  children,
  onClick,
  className,
}: IconButtonProps) => {
  return (
    <button onClick={onClick} className={cn(styles.iconButton, className)}>
      {children}
    </button>
  );
};
