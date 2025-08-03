import { useChangeEmail } from '../model/useChangeEmail';
import { ChangeEmailFormView } from './ChangeEmailFormView';

export const ChangeEmailForm = () => {
  const formData = useChangeEmail();
  return <ChangeEmailFormView {...formData} />;
};
