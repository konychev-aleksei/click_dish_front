import { ERROR_LOADING_CONTENT } from '../model/constants';
import styles from './ErrorBanner.module.scss';

type TProps = {
  error?: string;
};

export const ErrorBanner = ({ error = ERROR_LOADING_CONTENT }: TProps) => {
  return <div className={styles.errorBanner}>{error}</div>;
};
