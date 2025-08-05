import { useParams } from 'react-router-dom';
import type { Dish } from '@/entities/restaurant/api/contracts';
import {
  useCategoriesQuery,
  useRestaurantQuery,
} from '@/entities/restaurant/api/queries';
import { groupDishesByCategory } from '@/features/GroupDishesByCategory';

export const useRestaurantPage = () => {
  const { id: restaurantId } = useParams();

  const {
    data: dishes = [],
    isPending: isDishesLoading,
    error: dishesError,
  } = useRestaurantQuery(restaurantId!);

  const {
    data: categories = [],
    isPending: isCategoriesLoading,
    error: categoriesError,
  } = useCategoriesQuery(restaurantId!);

  const isLoading = isDishesLoading || isCategoriesLoading;
  const hasError = dishesError || categoriesError;

  const dishesByCategory = groupDishesByCategory(dishes as Dish[]);

  return { hasError, isLoading, categories, dishesByCategory } as const;
};
