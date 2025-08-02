import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './defaultValues';
import { registrationValidationSchema } from './validationSchema';
import type { TFieldValues } from './types';

export const useRegistrationForm = () => {
  const form = useForm<TFieldValues>({
    defaultValues,
    resolver: yupResolver(registrationValidationSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<TFieldValues> = (data) => {
    console.log('Registration data', data);
  };

  return { form, onSubmit };
};

export type TUseRegistrationForm = ReturnType<typeof useRegistrationForm>;
