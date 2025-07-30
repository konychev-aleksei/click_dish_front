import { createPortal } from 'react-dom';
import { X } from 'react-bootstrap-icons';
import { type ModalOptions } from '../model/types';
import styles from './Modal.module.scss';
import { IconButton } from '../../IconButton';

interface Props {
  modal: ModalOptions | null;
  onClose: () => void;
}

export const Modal = ({ modal, onClose }: Props) => {
  if (!modal) {
    return null;
  }

  return createPortal(
    <div className={styles.wrapper} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal__header}>
          <h2>{modal.title}</h2>
          <IconButton onClick={onClose} className={styles.modal__closeButton}>
            <X />
          </IconButton>
        </div>
        <div className={styles.body}>{modal.content}</div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
