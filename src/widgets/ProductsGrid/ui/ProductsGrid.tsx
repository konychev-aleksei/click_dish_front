import { Dish } from '@/features/Dish';
import styles from './Products.module.scss';

const obj = {
  id: 1,
  name: 'Хинкали',
  price: 1000,
  description: '',
  imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
};

export const ProductsGrid = () => {
  return (
    <>
      <h2>Хинкали</h2>
      <div className={styles.productsGrid}>
        <Dish {...obj} />
        <Dish {...obj} />
      </div>
    </>
  );
};
