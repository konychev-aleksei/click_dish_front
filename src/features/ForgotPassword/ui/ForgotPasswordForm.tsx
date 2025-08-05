import { useForgotPassword } from '../model/useForgotPassword';
import { ForgotPasswordFormView } from './ForgotPasswordFormView';

export const ForgotPasswordForm = () => {
  const formData = useForgotPassword();
  return <ForgotPasswordFormView {...formData} />;
};
