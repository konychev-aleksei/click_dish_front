import { ChangeEmailForm } from '@/features/ChangeEmail';
import { ChangePasswordForm } from '@/features/ChangePassword';
import { DeleteAccountButton } from '@/features/DeleteAccount';
import { Text, Stack } from '@/shared/UI';

export const ProfileSettings = () => {
  return (
    <Stack gap={20}>
      <Text size="l">Изменение пароля</Text>
      <ChangePasswordForm />
      <Text size="l">Изменение адреса email</Text>
      <ChangeEmailForm />
      <Text size="l">Удаление аккаунта</Text>
      <DeleteAccountButton />
    </Stack>
  );
};
