import { Spinner } from '../../Spinner';
import styles from './Modal.module.scss';

export const ModalPreloader = () => {
  return (
    <div className={styles.preloader}>
      <Spinner />
    </div>
  );
};
