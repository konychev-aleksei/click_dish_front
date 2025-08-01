import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, TextField, Form } from '@/shared/UI';
import { defaultValues, type TFieldValues } from '../model/defaultValues';

export const RegistrationForm = () => {
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
      <TextField label="Почта" {...register('email')} />

      <TextField label="Пароль" {...register('password')} />

      <TextField label="Подтвердить пароль" {...register('confirmPassword')} />

      <Button type="submit">Войти</Button>
    </Form>
  );
};
