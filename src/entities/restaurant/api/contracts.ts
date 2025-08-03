// entities/restaurant/api/contracts.ts
import * as yup from 'yup';

export const restaurantSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
});

export const restaurantsSchema = yup.array().of(restaurantSchema);

export type Restaurant = yup.InferType<typeof restaurantSchema>;
