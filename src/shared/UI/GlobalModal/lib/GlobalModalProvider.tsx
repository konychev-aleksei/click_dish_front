import { useState, type ReactNode } from 'react';
import { GlobalModal } from '../ui/GlobalModal';
import { type ModalOptions } from '../model/types';
import { ModalContext } from '../model/context';

export const GlobalModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalOptions | null>(null);

  const openModal = (options: ModalOptions) => setModal(options);

  const closeModal = () => {
    modal?.onClose?.();
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <GlobalModal modal={modal} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
