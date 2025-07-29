import '@/shared/styles/global.scss';
import { ProductsGrid } from '@/widgets/ProductsGrid/ui/ProductsGrid';
import styles from './App.module.scss';

import { GlobalModalProvider } from '@/shared/UI/GlobalModal/lib/GlobalModalProvider';

export const App = () => {
  return (
    <GlobalModalProvider>
      <div className={styles.pageWrapper}>
        <ProductsGrid />
      </div>
    </GlobalModalProvider>
  );
};
