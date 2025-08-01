import { type FormHTMLAttributes, type ReactNode } from 'react';
import {
  FormProvider,
  type UseFormReturn,
  type FieldValues,
  type SubmitHandler,
} from 'react-hook-form';
import cn from 'classnames';
import styles from './Form.module.scss';

type FormProps<T extends FieldValues> = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  'onSubmit'
> & {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
};

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
  ...rest
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(styles.form, className)}
        noValidate
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
};
