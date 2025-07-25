import React, { forwardRef } from 'react';
import cn from 'classnames';
import styles from './TextField.module.scss';

export type TextFieldProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, value, onChange, placeholder, disabled = false, error, className },
    ref
  ) => {
    return (
      <div className={cn(styles.textfield, className)}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(styles.input, {
            [styles.disabled]: disabled,
            [styles.error]: !!error,
          })}
        />

        {error && <div className={styles.errorText}>{error}</div>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
