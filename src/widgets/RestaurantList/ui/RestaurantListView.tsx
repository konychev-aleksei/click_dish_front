import { Button, Text, TextField, Link, Form, List } from '@/shared/UI';
import styles from './RestaurantList.module.scss';
import type { TUseRestaurantList as TProps } from '../model/useRestaurantList';

export const RestaurantListView = ({
  form,
  onSubmit,
  fields,
  handleAddRestaurant,
  handleDelete,
}: TProps) => {
  const { register, watch } = form;

  const restaurants = watch('restaurants');

  return (
    <div className={styles.restaurants}>
      <Text size="l">Здесь указаны все Ваши рестораны</Text>

      <Form form={form} onSubmit={onSubmit}>
        <Button onClick={handleAddRestaurant} width={200} type="button">
          Добавить ресторан
        </Button>

        <List
          items={fields}
          itemClassName={styles.restaurant}
          renderItem={(field, index) => (
            <>
              <TextField
                label="Название ресторана"
                className={styles.restaurant__name}
                {...register(`restaurants.${index}.name`)}
              />

              <Button type="submit" disabled={!restaurants[index]?.name.trim()}>
                Сохранить
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={() => handleDelete(index)}
              >
                Удалить
              </Button>

              <Link to={`/restaurant/${field.id}`} target="_blank">
                <Button>Открыть</Button>
              </Link>
            </>
          )}
        />
      </Form>
    </div>
  );
};
