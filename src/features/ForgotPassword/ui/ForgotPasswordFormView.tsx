import { Button, Form, TextField } from '@/shared/UI';
import type { TUseForgotPassword } from '../model/useForgotPassword';

export const ForgotPasswordFormView = ({
  form,
  onSubmit,
}: TUseForgotPassword) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

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
