import { type FormHTMLAttributes, type ReactNode } from 'react';
import {
  FormProvider,
  type UseFormReturn,
  type FieldValues,
} from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

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
        className={className}
        noValidate
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
};
