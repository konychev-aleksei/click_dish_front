import { useRestaurantList } from '../model/useRestaurantList';
import { RestaurantListView } from './RestaurantListView';

export const RestaurantList = () => {
  const formData = useRestaurantList();
  return <RestaurantListView {...formData} />;
};
