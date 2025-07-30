import '@/shared/styles/global.scss';

import { ModalProvider } from '@/shared/UI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '@/pages/Main';

export const App = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="main" element={<Main />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
};
