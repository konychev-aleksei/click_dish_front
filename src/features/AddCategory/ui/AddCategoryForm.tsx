import { Button, TextField, Form } from '@/shared/UI';
import type { TUseAddCategoryForm as TProps } from '../model/useAddCategoryForm';

export const AddCategoryForm = ({ form, onSubmit }: TProps) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <Form form={form} onSubmit={onSubmit}>
      <TextField
        label="Название"
        error={errors.title?.message}
        {...register('title')}
      />
      <Button type="submit" disabled={isSubmitting}>
        Создать
      </Button>
    </Form>
  );
};
