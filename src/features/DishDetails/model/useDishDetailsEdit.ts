import { useState, type ChangeEvent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { Dish as TProps } from '@/entities/restaurant/api/contracts';
import type { TFieldValues } from './types';

export const useDishDetailsEdit = ({ id, title, description }: TProps) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(''); // @to-do
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<TFieldValues>({
    defaultValues: { title, description },
  });

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    setImagePreviewUrl(previewUrl);
    setImageFile(file);
  };

  const handleDeleteDish = () => {
    if (!confirm(':jgf')) {
      console.log(id);
    }
  };

  const onSubmit: SubmitHandler<TFieldValues> = async (fieldValues) => {
    const formData = new FormData();
    formData.append('title', fieldValues.title);
    formData.append('description', fieldValues.description);

    if (imageFile) {
      formData.append('image', imageFile);
    }

    // TODO: отправить formData на сервер
    console.log('Submitting dish edit:', { ...fieldValues, imageFile });
  };

  return {
    imagePreviewUrl,
    form,
    onSubmit,
    handleChangeImage,
    handleDeleteDish,
  } as const;
};
