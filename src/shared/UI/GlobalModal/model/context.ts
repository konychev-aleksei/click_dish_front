import { createContext } from 'react';
import type { ModalOptions } from './types';

export type ModalContextType = {
  openModal: (options: ModalOptions) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);
