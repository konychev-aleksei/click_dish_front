import { Text } from '@/shared/UI';
import styles from './DishDetails.module.scss';
import type { TDishDetailsProps as TProps } from '../model/types';

export const DishDetailsView = ({ title, description, imageUrl }: TProps) => {
  return (
    <article className={styles.dishDetails}>
      <img src={imageUrl} alt={title} className={styles.dishDetails__image} />
      <div className={styles.dishDetails__info}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </div>
    </article>
  );
};
