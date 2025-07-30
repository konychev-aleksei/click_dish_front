import { type ReactNode } from 'react';

export type ModalOptions = {
  title?: string;
  content: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
};
