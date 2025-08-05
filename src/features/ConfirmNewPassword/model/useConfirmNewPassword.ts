import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { TFieldValues } from './types';
import { defaultValues } from './defaultValues';
import { yupResolver } from '@hookform/resolvers/yup';
import { confirmNewPasswordValidationSchema } from './validationSchema';
import { useResetPasswordMutation } from '@/entities/user/api/mutations';

export const useConfirmNewPassword = () => {
  const [searchParams] = useSearchParams();

  const confirmationToken = searchParams.get('confirmationToken') || '';

  const { mutateAsync: resetPassword } = useResetPasswordMutation();

  const navigate = useNavigate();

  const form = useForm<TFieldValues>({
    defaultValues,
    resolver: yupResolver(confirmNewPasswordValidationSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<TFieldValues> = async ({ password }) => {
    try {
      await resetPassword({
        user: {
          reset_password_token: confirmationToken,
          password,
        },
      });

      navigate('/user/login');
    } catch (error) {
      console.log(error);
    }
  };

  return { form, onSubmit } as const;
};

export type TUseConfirmNewPasswordForm = ReturnType<
  typeof useConfirmNewPassword
>;
