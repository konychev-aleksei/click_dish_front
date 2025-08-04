import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  restaurantSchema,
  categorySchema,
  dishSchema,
  type Restaurant,
  type Category,
  type Dish,
} from './contracts';
import { apiClient } from '@/shared/api/apiClient';

export const useRestaurantsQuery = () =>
  useQuery<Restaurant[]>({
    queryKey: ['restaurants'],
    queryFn: async () => {
      const res = await apiClient.get('/api/restaurants');
      return res.data.map((r: unknown) =>
        restaurantSchema.validateSync(r, { strict: true })
      );
    },
  });

export const useRestaurantQuery = (slug: number) =>
  useQuery<Restaurant>({
    queryKey: ['restaurant', slug],
    queryFn: async () => {
      const res = await axios.get(`/api/restaurants/${slug}`);
      return restaurantSchema.validateSync(res.data, { strict: true });
    },
  });

export const useCategoriesQuery = (restaurantSlug: number) =>
  useQuery<Category[]>({
    queryKey: ['categories', restaurantSlug],
    queryFn: async () => {
      const res = await axios.get(
        `/api/restaurants/${restaurantSlug}/categories`
      );
      return res.data.map((c: unknown) =>
        categorySchema.validateSync(c, { strict: true })
      );
    },
  });

export const useDishesQuery = (restaurantSlug: number) =>
  useQuery<Dish[]>({
    queryKey: ['dishes', restaurantSlug],
    queryFn: async () => {
      const res = await axios.get(`/api/restaurants/${restaurantSlug}/dishes`);
      return res.data.map((d: unknown) =>
        dishSchema.validateSync(d, { strict: true })
      );
    },
  });

export const useDishQuery = (restaurantSlug: number, id: number) =>
  useQuery<Dish>({
    queryKey: ['dishes', restaurantSlug, id],
    queryFn: async () => {
      const res = await axios.get(
        `/api/restaurants/${restaurantSlug}/dishes/${id}`
      );
      return dishSchema.validateSync(res.data, { strict: true });
    },
  });
