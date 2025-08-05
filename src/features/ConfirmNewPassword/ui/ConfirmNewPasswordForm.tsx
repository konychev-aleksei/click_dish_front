import { useConfirmNewPassword } from '../model/useConfirmNewPassword';
import { ConfirmNewPasswordFormView } from './ConfirmNewPasswordFormView';

export const ConfirmNewPasswordForm = () => {
  const formData = useConfirmNewPassword();
  return <ConfirmNewPasswordFormView {...formData} />;
};
