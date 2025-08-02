import { Button, TextField, Form } from '@/shared/UI';
import type { TUseRegistrationForm } from '../model/useRegistrationForm';

export const RegistrationFormView = ({
  form,
  onSubmit,
}: TUseRegistrationForm) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextField
        label="Почта"
        error={errors.email?.message}
        {...register('email')}
      />
      <TextField
        label="Пароль"
        type="password"
        error={errors.password?.message}
        {...register('password')}
      />
      <TextField
        label="Подтвердить пароль"
        type="password"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <Button type="submit" disabled={isSubmitting}>
        Зарегистрироваться
      </Button>
    </Form>
  );
};
