import { Button } from '@/shared/UI/Button';
import styles from './Dish.module.scss';
import { useGlobalModal } from '@/shared/UI/GlobalModal';

type TProps = {
  id: number;
  name: string;
  price: number; // пока в рублях
  description: string;
  imageUrl: string;
};

export const Dish = ({ name, price, imageUrl }: TProps) => {
  const { openModal } = useGlobalModal();

  const handleClick = () => {
    openModal({
      title: 'Подтвердите удаление',
      content: <p>Вы точно хотите удалить задачу?</p>,
      footer: (
        <div className="flex justify-end gap-2">
          <button className="btn" onClick={() => alert('Удалено')}>
            Удалить
          </button>
        </div>
      ),
    });
  };

  return (
    <label className={styles.dish}>
      <div className={styles.dish__imageWrapper}>
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className={styles.dish__image}
        />
      </div>
      <Button onClick={handleClick}>{price} ₽ | Подробнее</Button>
    </label>
  );
};
