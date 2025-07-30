import type { ReactNode } from 'react';
import styles from './PageWrapper.module.scss';
import { Footer } from '../../Footer';
import { Header } from '../../Header';

export type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
