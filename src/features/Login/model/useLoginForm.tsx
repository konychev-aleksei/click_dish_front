import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './defaultValues';
import { loginValidationSchema } from './validationSchema';
import { type TFieldValues } from './types';

export const useLoginForm = () => {
  const form = useForm<TFieldValues>({
    defaultValues,
    resolver: yupResolver(loginValidationSchema),
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<TFieldValues> = (dataValues) => {
    console.log(dataValues); // или вызов сервиса
  };

  return {
    form,
    onSubmit,
  };
};

export type TUseLoginForm = ReturnType<typeof useLoginForm>;
