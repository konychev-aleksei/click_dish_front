import { Dish } from '@/features/Dish';
import { Text } from '@/shared/UI';
import styles from './Products.module.scss';

const obj = {
  id: 1,
  name: 'Хинкали',
  price: 1000,
  description: '',
  imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
};

export const Category = () => {
  return (
    <li>
      <Text size="l" weight="bold">
        Вброс
      </Text>
      <div className={styles.productsGrid}>
        <Dish {...obj} />
        <Dish {...obj} />
      </div>
    </li>
  );
};
