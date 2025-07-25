import { Button } from '@/shared/UI/Button';
import styles from './Category.module.scss';

type TProps = {
  id: number;
  name: string;
  price: number; // пока в рублях
  description: string;
  imageUrl: string;
};

export const Category = ({ name, price, imageUrl }: TProps) => {
  return (
    <label className={styles.category}>
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        className={styles.category__image}
      />
      <Button onClick={() => alert('AA')}>{price} ₽ | Подробнее</Button>
    </label>
  );
};
