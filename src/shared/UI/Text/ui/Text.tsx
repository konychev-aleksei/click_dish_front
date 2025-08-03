import { type ParamHTMLAttributes, type ReactNode } from 'react';
import cn from 'classnames';
import styles from './Text.module.scss';

type TextTag =
  | 'p'
  | 'span'
  | 'div'
  | 'strong'
  | 'small'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type TextProps = ParamHTMLAttributes<HTMLParagraphElement> & {
  tag?: TextTag;
  size?: 's' | 'm' | 'l' | 'xl';
  color?: 'primary' | 'secondary' | 'error' | 'success';
  weight?: 'regular' | 'medium' | 'bold';
  children: ReactNode;
  className?: string;
};

export const Text = ({
  tag: Tag = 'p',
  size = 'm',
  color = 'primary',
  weight = 'regular',
  children,
  className,
  ...rest
}: TextProps) => {
  return (
    <Tag
      {...rest}
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
