import { AddCategoryButton } from '@/features/AddCategory';
import { Categories } from '@/features/Categories';
import { List } from '@/shared/UI';
import type { Category, Dish } from '@/entities/restaurant/api/contracts';
import { DishesGrid } from './DishesGrid';

type RestaurantContentProps = {
  categories: Category[];
  dishesByCategory: Record<number, Dish[]>;
};

export const RestaurantContent = ({
  categories,
  dishesByCategory,
}: RestaurantContentProps) => {
  const blocksFormatted = Object.entries(dishesByCategory);

  return (
    <>
      <Categories />
      <AddCategoryButton />
      <List
        items={blocksFormatted}
        renderItem={([categoryId, dishes]) => (
          <DishesGrid
            id={+categoryId}
            title={categories[+categoryId]?.title ?? 'Без категории'}
            dishes={dishes}
          />
        )}
      />
    </>
  );
};
