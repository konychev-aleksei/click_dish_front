import { LoginFormView } from './LoginFormView';
import { useLoginForm } from '../model/useLoginForm';

export const LoginForm = () => {
  const loginForm = useLoginForm();
  return <LoginFormView {...loginForm} />;
};
