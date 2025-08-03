import { useChangePasswordForm } from '../model/useChangePasswordForm';
import { ChangePasswordFormView } from './ChangePasswordFormView';

export const ChangePasswordForm = () => {
  const formData = useChangePasswordForm();
  return <ChangePasswordFormView {...formData} />;
};
