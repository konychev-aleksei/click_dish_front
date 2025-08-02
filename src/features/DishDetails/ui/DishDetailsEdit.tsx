import { useState, type ChangeEvent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button, Form, TextField } from '@/shared/UI';
import { UploadImageButton } from '@/features/UploadImageButton';
import styles from './DishDetails.module.scss';
import type { TFieldValues, TDishDetailsProps as TProps } from '../model/types';

export const DishDetailsEdit = ({
  id,
  title,
  description,
  imageUrl,
}: TProps) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(imageUrl);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<TFieldValues>({
    defaultValues: { title, description },
  });

  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

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

  return (
    <article className={styles.dishDetails}>
      <img
        src={imagePreviewUrl}
        alt="Превью блюда"
        className={styles.dishDetails__image}
      />
      <Form
        form={form}
        onSubmit={onSubmit}
        className={styles.dishDetails__info}
      >
        <TextField
          label="Название"
          error={errors.title?.message}
          {...register('title')}
        />
        <TextField
          label="Описание"
          multiline
          minRows={6}
          maxRows={10}
          error={errors.description?.message}
          {...register('description')}
        />
        <UploadImageButton onImageChange={handleChangeImage} />
        <div>
          <Button onClick={handleDeleteDish} disabled={isSubmitting}>
            Удалить
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            Сохранить
          </Button>
        </div>
      </Form>
    </article>
  );
};
