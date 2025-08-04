import { ModalPreloader, ErrorBanner } from '@/shared/UI';
import { DishDetailsView } from './DishDetailsView';
import { DishDetailsEdit } from './DishDetailsEdit';
import { useDishQuery } from '@/entities/restaurant/api/queries';

type TProps = {
  id: number;
  restaurantSlug: number;
  canEdit?: boolean;
};

export const DishDetails = ({
  id,
  restaurantSlug,
  canEdit = false,
}: TProps) => {
  const { data: dish, isLoading, error } = useDishQuery(restaurantSlug, id);

  if (isLoading) {
    return <ModalPreloader />;
  }

  if (error) {
    return <ErrorBanner error={error.message} />;
  }

  const Details = canEdit ? DishDetailsEdit : DishDetailsView;

  return <Details {...dish!} />;
};
