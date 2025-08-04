import { Button } from '@/shared/UI/Button';
import styles from './Dish.module.scss';
import { useModal } from '@/shared/UI/Modal';
import { Text } from '@/shared/UI';
import { DishDetails } from '@/features/DishDetails';
import type { Dish as TDish } from '@/entities/restaurant/api/contracts';

export const Dish = (dish: TDish) => {
  const { title, price } = dish;

  const { openModal } = useModal();

  const handleClick = () => {
    openModal({
      title,
      content: <DishDetails restaurantSlug={1} {...dish} />,
    });
  };

  return (
    <article onClick={handleClick} className={styles.dish}>
      <div className={styles.dish__imageWrapper}>
        <img
          src={''}
          alt={title}
          loading="lazy"
          className={styles.dish__image}
        />
      </div>
      <Text className={styles.dish__description}>{title}</Text>
      <Button onClick={(e) => e.stopPropagation()}>
        {price} ₽ | В корзину
      </Button>
    </article>
  );
};
