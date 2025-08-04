import { useParams } from 'react-router-dom';
import { PageWrapper, Spinner, ErrorBanner } from '@/shared/UI';
import {
  useRestaurantQuery,
  useCategoriesQuery,
} from '@/entities/restaurant/api/queries';
import { RestaurantContent } from '@/widgets/RestaurantContent/ui/RestaurantContent';
import { groupDishesByCategory } from '@/features/GroupDishesByCategory/lib/groupDishesByCategory';
import type { Dish } from '@/entities/restaurant/api/contracts';

const RestaurantPage = () => {
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

  return (
    <PageWrapper isLoading={isLoading} fallbackUI={<Spinner />}>
      {hasError ? (
        <ErrorBanner />
      ) : (
        <RestaurantContent
          categories={categories}
          dishesByCategory={dishesByCategory}
        />
      )}
    </PageWrapper>
  );
};

export default RestaurantPage;
