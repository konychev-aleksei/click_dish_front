import * as yup from 'yup';

export const restaurantSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required(),
  slug: yup.string().required(),
});

export const restaurantInputSchema = yup.object({
  name: yup.string().required('Name is required'),
  slug: yup.string().required('Slug is required'),
});

export const categorySchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
});

export const categoryInputSchema = yup.object({
  title: yup.string().required('Title is required'),
});

export const dishSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().optional(),
  category_id: yup.number().required(),
});

export const dishInputSchema = yup.object({
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required'),
  description: yup.string().optional(),
  category_id: yup.number().required('Category is required'),
});

export type Restaurant = yup.InferType<typeof restaurantSchema>;
export type RestaurantInput = yup.InferType<typeof restaurantInputSchema>;

export type Category = yup.InferType<typeof categorySchema>;
export type CategoryInput = yup.InferType<typeof categoryInputSchema>;

export type Dish = yup.InferType<typeof dishSchema>;
export type DishInput = yup.InferType<typeof dishInputSchema>;
