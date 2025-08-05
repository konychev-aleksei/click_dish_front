import { useForm, type SubmitHandler } from 'react-hook-form';
import { defaultValues, type TFieldValues } from '../model/defaultValues';
import { useRequestPasswordResetMutation } from '@/entities/user/api/mutations';

export const useForgotPassword = () => {
  const { mutateAsync: requestPasswordReset } =
    useRequestPasswordResetMutation();

  const form = useForm<TFieldValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<TFieldValues> = async ({ email }) => {
    await requestPasswordReset({ user: { email } });
  };

  return { form, onSubmit } as const;
};

export type TUseForgotPassword = ReturnType<typeof useForgotPassword>;
