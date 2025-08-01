import { Text } from '@/shared/UI';
import styles from './DishDetails.module.scss';

export const DishDetails = ({ imageUrl, title, description }) => {
  return (
    <article className={styles.dishDetails}>
      <img src={imageUrl} alt={title} className={styles.dishDetails__image} />
      <Text className={styles.dishDetails__description}>{description}</Text>
    </article>
  );
};
