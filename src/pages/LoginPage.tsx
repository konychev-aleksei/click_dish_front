import { LoginForm } from '@/features/LoginForm';
import { Link, PageWrapper, Text } from '@/shared/UI';
import { SingleFormLayout } from '@/shared/UI/SingleFormLayout';

export const LoginPage = () => {
  return (
    <PageWrapper>
      <SingleFormLayout>
        <Text size="l" weight="bold">
          Вход в аккаунт
        </Text>
        <LoginForm />
        <Link to={`/user/forgot-password`}>Забыли пароль?</Link>
      </SingleFormLayout>
    </PageWrapper>
  );
};
