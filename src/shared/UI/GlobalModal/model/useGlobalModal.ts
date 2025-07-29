import { useContext } from 'react';
import { ModalContext } from './context';

export const useGlobalModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useGlobalModal must be used within GlobalModalProvider');
  }

  return context;
};
