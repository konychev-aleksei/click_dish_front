import { RegistrationForm } from '@/features/Registration';
import { Link, PageWrapper, Text } from '@/shared/UI';
import { SingleFormLayout } from '@/shared/UI/SingleFormLayout';

const RegistrationPage = () => {
  return (
    <PageWrapper>
      <SingleFormLayout>
        <Text size="l" weight="bold">
          Регистрация аккаунта
        </Text>
        <RegistrationForm />
        <Text>
          Уже есть аккаунт? <Link to={`/user/forgot-password`}>Войти</Link>
        </Text>
      </SingleFormLayout>
    </PageWrapper>
  );
};

export default RegistrationPage;
