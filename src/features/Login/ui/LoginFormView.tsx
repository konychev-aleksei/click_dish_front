import { Button, TextField, Form } from '@/shared/UI';
import type { TUseLoginForm as TProps } from '../model/useLoginForm';

export const LoginFormView = ({ form, onSubmit }: TProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextField
        label="Email"
        error={errors.email?.message}
        {...register('email')}
      />
      <TextField
        label="Пароль"
        type="password"
        error={errors.password?.message}
        {...register('password')}
      />
      <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>
        Войти
      </Button>
    </Form>
  );
};
