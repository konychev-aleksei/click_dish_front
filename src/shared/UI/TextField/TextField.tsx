import {
  forwardRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
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
      type,
      ...rest
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const showPasswordToggle = type === 'password';

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    const inputType = showPasswordToggle
      ? isPasswordVisible
        ? 'text'
        : 'password'
      : type;

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
              ...(maxRows && { maxHeight: `${maxRows * 1.5}em` }),
            }}
          />
        ) : (
          <div className={styles.inputWrapper}>
            <input {...(commonProps as InputProps)} type={inputType} />
            {showPasswordToggle && (
              <button
                type="button"
                className={styles.eyeButton}
                onClick={togglePasswordVisibility}
                tabIndex={-1}
              >
                {isPasswordVisible ? (
                  <EyeSlash className={styles.eyeIcon} />
                ) : (
                  <Eye className={styles.eyeIcon} />
                )}
              </button>
            )}
          </div>
        )}

        {error && <div className={styles.errorText}>{error}</div>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
