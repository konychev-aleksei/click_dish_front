import { Button, Form, TextField } from '@/shared/UI';
import { UploadImageButton } from '@/features/UploadImageButton';
import styles from './DishDetails.module.scss';
import { useDishDetailsEdit } from '../model/useDishDetailsEdit';
import type { Dish as TProps } from '@/entities/restaurant/api/contracts';

export const DishDetailsEdit = (dish: TProps) => {
  const {
    imagePreviewUrl,
    form,
    onSubmit,
    handleChangeImage,
    handleDeleteDish,
  } = useDishDetailsEdit(dish);

  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

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
