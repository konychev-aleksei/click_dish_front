import type { ReactNode } from 'react';
import styles from './PageWrapper.module.scss';
import { Footer } from '../../Footer';
import { Header } from '../../Header';

export type PageWrapperProps = {
  children: ReactNode;
  isLoading?: boolean;
  fallbackUI?: ReactNode;
};

export const PageWrapper = ({
  isLoading = false,
  fallbackUI = <></>,
  children,
}: PageWrapperProps) => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      {isLoading ? (
        <div className={styles.pageWrapper__loading}>{fallbackUI}</div>
      ) : (
        children
      )}
      <Footer />
    </div>
  );
};
