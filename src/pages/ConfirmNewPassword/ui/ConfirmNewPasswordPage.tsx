import { PageWrapper, Text, SingleFormLayout } from '@/shared/UI';
import { ConfirmNewPasswordForm } from '@/features/ConfirmNewPassword';

export const ConfirmNewPasswordPage = () => {
  return (
    <PageWrapper>
      <SingleFormLayout>
        <Text size="l">Придумайте новый пароль</Text>
        <ConfirmNewPasswordForm />
      </SingleFormLayout>
    </PageWrapper>
  );
};
