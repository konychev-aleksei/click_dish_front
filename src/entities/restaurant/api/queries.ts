import { useQuery } from '@tanstack/react-query';
import { type Restaurant, restaurantsSchema } from './contracts';
import axios from 'axios';

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const res = await axios.get('/api/restaurants');
  return restaurantsSchema.validateSync(res.data) as Restaurant[];
};

export const useRestaurantsQuery = () =>
  useQuery({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  });
