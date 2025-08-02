import { ForgotPasswordForm } from '@/features/ForgotPassword';
import { PageWrapper, Text } from '@/shared/UI';
import { SingleFormLayout } from '@/shared/UI/SingleFormLayout';

const ForgotPasswordPage = () => {
  return (
    <PageWrapper>
      <SingleFormLayout>
        <Text size="l" weight="bold">
          Восстановление пароля
        </Text>
        <Text>
          Укажите Ваш email, Вы получите письмо с дальнейшими инструкциями.
        </Text>
        <ForgotPasswordForm />
      </SingleFormLayout>
    </PageWrapper>
  );
};

export default ForgotPasswordPage;
