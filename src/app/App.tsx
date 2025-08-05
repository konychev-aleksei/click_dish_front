import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import '@/shared/styles/global.scss';

import { ModalProvider } from '@/shared/UI';
import { withReactQuery } from './providers/ReactQuery';

const RestaurantPage = lazy(() => import('@/pages/Restaurant'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegistrationPage = lazy(() => import('@/pages/RegistrationPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPasswordPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const ConfirmNewPasswordPage = lazy(() => import('@/pages/ConfirmNewPassword'));

export const App = withReactQuery(() => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/user">
              <Route path="login" element={<LoginPage />} />
              <Route path="registration" element={<RegistrationPage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route
                path="confirm-new-password"
                element={<ConfirmNewPasswordPage />}
              />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </Suspense>
      </ModalProvider>
    </BrowserRouter>
  );
});
