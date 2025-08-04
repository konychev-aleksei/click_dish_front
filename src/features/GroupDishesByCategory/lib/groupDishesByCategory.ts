import type { Dish } from '@/entities/restaurant/api/contracts';

export const groupDishesByCategory = (dishes: Dish[]) => {
  return dishes.reduce<Record<number, Dish[]>>((acc, dish) => {
    const catId = dish.category_id;
    acc[catId] = acc[catId] ? [...acc[catId], dish] : [dish];
    return acc;
  }, {});
};
