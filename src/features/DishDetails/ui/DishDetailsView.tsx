import { Text } from '@/shared/UI';
import styles from './DishDetails.module.scss';
import type { Dish as TDish } from '@/entities/restaurant/api/contracts';

export const DishDetailsView = ({ title, description }: TDish) => {
  return (
    <article className={styles.dishDetails}>
      <img src={''} alt={title} className={styles.dishDetails__image} />
      <div className={styles.dishDetails__info}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </div>
    </article>
  );
};
