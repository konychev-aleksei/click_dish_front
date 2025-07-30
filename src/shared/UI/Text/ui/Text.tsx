import { type ReactNode } from 'react';
import cn from 'classnames';
import styles from './Text.module.scss';

type TextTag = 'p' | 'span' | 'div' | 'strong' | 'small';

interface TextProps {
  tag?: TextTag;
  size?: 's' | 'm' | 'l';
  color?: 'primary' | 'secondary' | 'error' | 'success';
  weight?: 'regular' | 'medium' | 'bold';
  children: ReactNode;
  className?: string;
}

export const Text = ({
  tag: Tag = 'p',
  size = 'm',
  color = 'primary',
  weight = 'regular',
  children,
  className,
}: TextProps) => {
  return (
    <Tag
      className={cn(
        styles.text,
        styles[size],
        styles[color],
        styles[weight],
        className
      )}
    >
      {children}
    </Tag>
  );
};
