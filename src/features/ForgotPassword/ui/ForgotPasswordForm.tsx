import { Button, Form, Text, TextField } from '@/shared/UI';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { defaultValues, type TFieldValues } from '../model/defaultValues';

export const ForgotPasswordForm = () => {
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
      <TextField
        label="Почта"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        disabled={isSubmitting}
      />

      <Button disabled={isSubmitting} loading={isSubmitting}>
        Восстановить
      </Button>
    </Form>
  );
};
