import {
  forwardRef,
  type ChangeEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';
import cn from 'classnames';
import styles from './TextField.module.scss';

type BaseProps = {
  label?: string;
  error?: string;
  className?: string;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
};

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;
type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'rows'
>;

export type TextFieldProps = BaseProps &
  (InputProps | TextareaProps) & {
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };

export const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      label,
      value,
      onChange,
      placeholder,
      disabled = false,
      error,
      className,
      multiline = false,
      minRows = 3,
      maxRows,
      ...rest
    },
    ref
  ) => {
    const commonProps = {
      ref,
      value,
      onChange,
      placeholder,
      disabled,
      className: cn(styles.input, {
        [styles.disabled]: disabled,
        [styles.error]: !!error,
      }),
      ...rest,
    };

    return (
      <div className={cn(styles.textfield, className)}>
        {label && <label className={styles.label}>{label}</label>}

        {multiline ? (
          <textarea
            {...(commonProps as TextareaProps)}
            rows={minRows}
            style={{
              resize: 'none',
              ...(maxRows && { maxHeight: `${maxRows * 1.5}em` }), // или px, зависит от дизайна
            }}
          />
        ) : (
          <input {...(commonProps as InputProps)} />
        )}

        {error && <div className={styles.errorText}>{error}</div>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
