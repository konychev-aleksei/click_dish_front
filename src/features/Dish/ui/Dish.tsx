import { Button } from '@/shared/UI/Button';
import styles from './Dish.module.scss';
import { useModal } from '@/shared/UI/Modal';
import { Text } from '@/shared/UI';
import { DishDetails } from '@/features/DishDetails';

type TProps = {
  id: number;
  title: string;
  price: number; // пока в рублях
  description: string;
  imageUrl: string;
};

export const Dish = (dish: TProps) => {
  const { title, price, imageUrl } = dish;

  const { openModal } = useModal();

  const handleClick = () => {
    openModal({
      title,
      content: <DishDetails {...dish} canEdit />,
    });
  };

  return (
    <article onClick={handleClick} className={styles.dish}>
      <div className={styles.dish__imageWrapper}>
        <img
          src={imageUrl}
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
