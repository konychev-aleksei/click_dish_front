import { useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterMutation } from '@/entities/user/api/mutations';
import { defaultValues } from './defaultValues';
import { registrationValidationSchema } from './validationSchema';
import type { TFieldValues } from './types';

export const useRegistrationForm = () => {
  const navigate = useNavigate();

  const { mutateAsync: register } = useRegisterMutation();

  const form = useForm<TFieldValues>({
    defaultValues,
    resolver: yupResolver(registrationValidationSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<TFieldValues> = ({ email, password }) => {
    register({ user: { email, password } }).then(() => {
      navigate('/user/profile');
    });
  };

  return { form, onSubmit };
};

export type TUseRegistrationForm = ReturnType<typeof useRegistrationForm>;
