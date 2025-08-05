import { Button, Form, TextField } from '@/shared/UI';
import { type TUseConfirmNewPasswordForm as TProps } from '../model/useConfirmNewPassword';

export const ConfirmNewPasswordFormView = ({ form, onSubmit }: TProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextField
        label="Новый пароль"
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
      <Button type="submit" disabled={isSubmitting} loading={isSubmitting}>
        Сохранить новый пароль
      </Button>
    </Form>
  );
};
