import { DishDetailsView } from './DishDetailsView';
import { DishDetailsEdit } from './DishDetailsEdit';
import type { TDishDetailsProps } from '../model/types';
import { ModalPreloader } from '@/shared/UI/Modal';
import { ErrorBanner } from '@/shared/UI';

type TProps = TDishDetailsProps & {
  canEdit?: boolean;
};

const isLoading = false;

const error = null;

const dishData = {
  id: 1,
  title:
    'Мегрельское мжаве (ассорти из солений) Мегрельское мжаве (ассорти из солений)',
  price: 500,
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sunt quis saepe molestiae illo qui et debitis, hic ipsa!',
  imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
  category_id: 1,
};

export const DishDetails = ({ id, canEdit = false }: TProps) => {
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
