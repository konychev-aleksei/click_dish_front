import { RegistrationFormView } from './RegistrationFormView';
import { useRegistrationForm } from '../model/useRegistrationForm';

export const RegistrationForm = () => {
  const registrationForm = useRegistrationForm();
  return <RegistrationFormView {...registrationForm} />;
};
