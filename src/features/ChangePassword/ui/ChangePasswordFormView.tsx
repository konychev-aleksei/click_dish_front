import { Button, Form, TextField } from '@/shared/UI';
import type { TUseChangePasswordForm as TProps } from '../model/useChangePasswordForm';

export const ChangePasswordFormView = ({ form, onSubmit }: TProps) => {
  const { register } = form;

  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextField
        {...register('currentPassword')}
        type="password"
        label="Текущий пароль"
      />
      <TextField
        {...register('newPassword')}
        type="password"
        label="Новый пароль"
      />
      <TextField
        {...register('confirmNewPassword')}
        type="password"
        label="Подтвердить пароль"
      />
      <Button width={200}>Сохранить</Button>
    </Form>
  );
};
