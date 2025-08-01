import { ForgotPasswordForm } from '@/features/ForgotPassword';
import { PageWrapper, Text } from '@/shared/UI';
import { SingleFormLayout } from '@/shared/UI/SingleFormLayout';

export const ForgotPasswordPage = () => {
  return (
    <PageWrapper>
      <SingleFormLayout>
        <Text size="l" weight="bold">
          Восстановление пароля
        </Text>
        <Text>
          Укажите Ваш email, Вы получите на e-mail письмо с дальнейшими
          инструкциями.
        </Text>
        <ForgotPasswordForm />
      </SingleFormLayout>
    </PageWrapper>
  );
};
