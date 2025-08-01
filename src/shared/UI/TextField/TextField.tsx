import { forwardRef, type ChangeEvent, type InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './TextField.module.scss';

export type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> & {
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      value,
      onChange,
      placeholder,
      disabled = false,
      error,
      className,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cn(styles.textfield, className)}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(styles.input, {
            [styles.disabled]: disabled,
            [styles.error]: !!error,
          })}
          {...rest}
        />

        {error && <div className={styles.errorText}>{error}</div>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
