import { type ReactNode, type CSSProperties } from 'react';
import cn from 'classnames';
import styles from './Stack.module.scss';

type StackProps = {
  children: ReactNode;
  gap?: number;
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  className?: string;
  style?: CSSProperties;
};

export const Stack = ({
  children,
  gap = 8,
  direction = 'column',
  align = 'stretch',
  justify = 'start',
  className,
  style,
}: StackProps) => {
  return (
    <div
      className={cn(
        styles.stack,
        styles[direction],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        className
      )}
      style={{ gap, ...style }}
    >
      {children}
    </div>
  );
};
