import { LoginForm } from '@/features/Login';
import { Link, PageWrapper, Text } from '@/shared/UI';
import { SingleFormLayout } from '@/shared/UI/SingleFormLayout';

const LoginPage = () => {
  return (
    <PageWrapper>
      <SingleFormLayout>
        <Text size="l" weight="bold">
          Вход в аккаунт
        </Text>
        <LoginForm />
        <Link to={`/user/forgot-password`}>Забыли пароль?</Link>
        <Text>
          Нет аккаунта? <Link to={`/user/registration`}>Регистрация</Link>
        </Text>
      </SingleFormLayout>
    </PageWrapper>
  );
};

export default LoginPage;
