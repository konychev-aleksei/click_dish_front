import { Button, Text, TextField } from '@/shared/UI';
import styles from './RestaurantList.module.scss';

export const RestaurantList = () => {
  return (
    <div className={styles.restaurants}>
      <Text size="l">Здесь указаны все Ваши рестораны</Text>
      {/* <AddRestaurantButton /> */}
      <ul className={styles.restaurants__list}>
        <li className={styles.restaurant}>
          <TextField />
          <Button disabled>Сохранить</Button>
          <Button>Открыть</Button>
          <Button variant="secondary">Удалить</Button>
        </li>
      </ul>
    </div>
  );
};
