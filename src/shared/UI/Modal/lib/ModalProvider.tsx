import { useState, type ReactNode } from 'react';
import { Modal } from '../ui/Modal';
import { type ModalOptions } from '../model/types';
import { ModalContext } from '../model/context';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalOptions | null>(null);

  const openModal = (options: ModalOptions) => setModal(options);

  const closeModal = () => {
    modal?.onClose?.();
    setModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal modal={modal} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
