import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, TextField, Link, Form } from '@/shared/UI';
import { defaultValues, type TFieldValues } from '../model/defaultValues';

export const ProductForm = () => {
  const form = useForm<TFieldValues>({
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<TFieldValues> = (dataValues) => {};

  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextField label="Логин" {...register('userName')} />

      <TextField label="Пароль" {...register('password')} />

      <Button type="submit">Сохранить</Button>
    </Form>
  );
};
