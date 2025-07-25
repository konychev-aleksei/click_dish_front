import '@/shared/styles/global.scss';
import { ProductsGrid } from '@/widgets/ProductsGrid/ProductsGrid';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.pageWrapper}>
      <ProductsGrid />
    </div>
  );
}

export default App;
