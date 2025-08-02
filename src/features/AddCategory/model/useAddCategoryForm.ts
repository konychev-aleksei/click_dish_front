import { useForm, type SubmitHandler } from 'react-hook-form';
import type { TFieldValues } from './types';
import { defaultValues } from './defaultValues';
import { yupResolver } from '@hookform/resolvers/yup';
import { addCategoryValidationSchema } from './validationSchema';

export const useAddCategoryForm = () => {
  const form = useForm<TFieldValues>({
    defaultValues,
    resolver: yupResolver(addCategoryValidationSchema),
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

export type TUseAddCategoryForm = ReturnType<typeof useAddCategoryForm>;
