import { Dish } from '@/features/Dish';
import { Text } from '@/shared/UI';
import styles from './DishesGrid.module.scss';

const obj = {
  id: 1,
  name: 'Хинкали',
  price: 1000,
  description: '',
  imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
};

type TProps = { id: number; title: string; dishes: any[] };

export const DishesGrid = ({ id, title, dishes }: TProps) => {
  return (
    <li>
      <Text
        id={`category${id}`}
        size="l"
        weight="bold"
        className={styles.title}
      >
        {title}
      </Text>
      <div className={styles.dishesGrid}>
        {dishes.map((dish) => (
          <Dish key={dish.id} {...dish} />
        ))}
      </div>
    </li>
  );
};
