import '@/shared/styles/global.scss';

import { ModalProvider } from '@/shared/UI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { LoginPage } from '@/pages/LoginPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';

export const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="main" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};
