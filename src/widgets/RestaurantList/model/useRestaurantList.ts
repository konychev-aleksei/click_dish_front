import { useForm, useFieldArray } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import type { TFieldValues } from './types';

export const useRestaurantList = () => {
  const form = useForm<TFieldValues>({
    defaultValues: {
      restaurants: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'restaurants',
    keyName: 'formId',
  });

  const onSubmit = (data: TFieldValues) => {
    const cleaned = data.restaurants.map((r) => ({
      ...r,
      name: r.name.trim(),
    }));

    // тут логика отправки на сервер
  };

  const handleAddRestaurant = () => {
    append({ id: uuidv4(), name: '' });
  };

  const handleDelete = (index: number) => {
    remove(index);
  };

  return { form, fields, onSubmit, handleAddRestaurant, handleDelete } as const;
};

export type TUseRestaurantList = ReturnType<typeof useRestaurantList>;
