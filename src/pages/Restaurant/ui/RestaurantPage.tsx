import { PageWrapper, Spinner, ErrorBanner } from '@/shared/UI';
import { RestaurantContent } from '@/widgets/RestaurantContent/ui/RestaurantContent';
import { useRestaurantPage } from '../model/useRestaurantPage';

export const RestaurantPage = () => {
  const { hasError, isLoading, categories, dishesByCategory } =
    useRestaurantPage();

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
