import { useMutation } from '@tanstack/react-query';
import {
  restaurantSchema,
  restaurantInputSchema,
  categorySchema,
  categoryInputSchema,
  dishSchema,
  dishInputSchema,
  type RestaurantInput,
  type CategoryInput,
  type DishInput,
} from './contracts';
import { apiClient } from '@/shared/api/apiClient';

export const useCreateRestaurantMutation = () =>
  useMutation({
    mutationFn: async (data: RestaurantInput) => {
      restaurantInputSchema.validateSync(data);
      const res = await apiClient.post('/api/restaurants', data);
      return restaurantSchema.validateSync(res.data, { strict: true });
    },
  });

export const useUpdateRestaurantMutation = (slug: string) =>
  useMutation({
    mutationFn: async (data: Partial<RestaurantInput>) => {
      const res = await apiClient.patch(`/api/restaurants/${slug}`, data);
      return restaurantSchema.validateSync(res.data, { strict: true });
    },
  });

export const useDeleteRestaurantMutation = (slug: string) =>
  useMutation({
    mutationFn: () => apiClient.delete(`/api/restaurants/${slug}`),
  });

export const useCreateCategoryMutation = (restaurantSlug: string) =>
  useMutation({
    mutationFn: async (data: CategoryInput) => {
      categoryInputSchema.validateSync(data);
      const res = await apiClient.post(
        `/api/restaurants/${restaurantSlug}/categories`,
        data
      );
      return categorySchema.validateSync(res.data, { strict: true });
    },
  });

export const useUpdateCategoryMutation = (restaurantSlug: string, id: number) =>
  useMutation({
    mutationFn: async (data: Partial<CategoryInput>) => {
      const res = await apiClient.patch(
        `/api/restaurants/${restaurantSlug}/categories/${id}`,
        data
      );
      return categorySchema.validateSync(res.data, { strict: true });
    },
  });

export const useDeleteCategoryMutation = (restaurantSlug: string, id: number) =>
  useMutation({
    mutationFn: () =>
      apiClient.delete(`/api/restaurants/${restaurantSlug}/categories/${id}`),
  });

export const useCreateDishMutation = (restaurantSlug: string) =>
  useMutation({
    mutationFn: async (data: DishInput) => {
      dishInputSchema.validateSync(data);
      const res = await apiClient.post(
        `/api/restaurants/${restaurantSlug}/dishes`,
        data
      );
      return dishSchema.validateSync(res.data, { strict: true });
    },
  });

export const useUpdateDishMutation = (restaurantSlug: string, id: number) =>
  useMutation({
    mutationFn: async (data: Partial<DishInput>) => {
      const res = await apiClient.patch(
        `/api/restaurants/${restaurantSlug}/dishes/${id}`,
        data
      );
      return dishSchema.validateSync(res.data, { strict: true });
    },
  });

export const useDeleteDishMutation = (restaurantSlug: string, id: number) =>
  useMutation({
    mutationFn: () =>
      apiClient.delete(`/api/restaurants/${restaurantSlug}/dishes/${id}`),
  });
