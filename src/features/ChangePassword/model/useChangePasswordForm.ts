import { useForm, type SubmitHandler } from 'react-hook-form';
import { defaultValues } from './defaultValues';
import type { TFieldValues } from './types';

export const useChangePasswordForm = () => {
  const form = useForm<TFieldValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<TFieldValues> = () => {};

  return { form, onSubmit } as const;
};

export type TUseChangePasswordForm = ReturnType<typeof useChangePasswordForm>;
