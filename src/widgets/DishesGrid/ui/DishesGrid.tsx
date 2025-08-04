import { Dish } from '@/features/Dish';
import { Button, Accordion } from '@/shared/UI';
import styles from './DishesGrid.module.scss';
import type { Dish as TDish } from '@/entities/restaurant/api/contracts';

type TProps = { id: number; title: string; dishes: TDish[] };

export const DishesGrid = ({ id, title, dishes }: TProps) => {
  return (
    <Accordion id={`category${id}`} title={title}>
      <div className={styles.dishesGrid}>
        {dishes.map((dish) => (
          <Dish key={dish.id} {...dish} />
        ))}
      </div>
      <div className={styles.controls}>
        <Button>Добавить блюдо</Button>
        <Button variant="secondary">Удалить категорию</Button>
      </div>
    </Accordion>
  );
};
