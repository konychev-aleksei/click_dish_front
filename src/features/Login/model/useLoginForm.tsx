import { useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '@/entities/user/api/mutations';
import { defaultValues } from './defaultValues';
import { loginValidationSchema } from './validationSchema';
import type { TFieldValues } from './types';

export const useLoginForm = () => {
  const navigate = useNavigate();

  const { mutateAsync: login } = useLoginMutation();

  const form = useForm<TFieldValues>({
    defaultValues,
    resolver: yupResolver(loginValidationSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<TFieldValues> = (user) => {
    login({ user }).then(() => {
      navigate('/user/profile');
    });
  };

  return {
    form,
    onSubmit,
  };
};

export type TUseLoginForm = ReturnType<typeof useLoginForm>;
