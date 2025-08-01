import { type ReactNode } from 'react';
import cn from 'classnames';
import styles from './SingleFormLayout.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const SingleFormLayout = ({ children, className }: Props) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
