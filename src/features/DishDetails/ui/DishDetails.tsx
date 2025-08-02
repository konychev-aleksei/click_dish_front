import { DishDetailsView } from './DishDetailsView';
import { DishDetailsEdit } from './DishDetailsEdit';
import type { TDishDetailsProps } from '../model/types';
import { ModalPreloader } from '@/shared/UI/Modal';
import { ErrorBanner } from '@/shared/UI';

type TProps = TDishDetailsProps & {
  canEdit: boolean;
};

const isLoading = true;

const error = null;

export const DishDetails = ({ id, canEdit }: TProps) => {
  // const { dishData, isLoading, error } = useDishDetails(id);

  if (isLoading) {
    return <ModalPreloader />;
  }

  if (error) {
    return <ErrorBanner error={error} />;
  }

  const Details = canEdit ? DishDetailsEdit : DishDetailsView;

  return <Details {...dishData} />;
};
