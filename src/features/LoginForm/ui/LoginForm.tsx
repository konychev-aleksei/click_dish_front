import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, TextField, Form } from '@/shared/UI';
import { defaultValues, type TFieldValues } from '../model/defaultValues';

export const LoginForm = () => {
  const form = useForm<TFieldValues>({
    defaultValues,
  });

  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<TFieldValues> = (dataValues) => {};

  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextField label="Логин" {...register('userName')} />

      <TextField label="Пароль" {...register('password')} />

      <Button type="submit">Войти</Button>
    </Form>
  );
};
