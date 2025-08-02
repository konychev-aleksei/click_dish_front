import { useAddCategoryForm } from '../model/useAddCategoryForm';
import { AddCategoryForm } from './AddCategoryForm';

export const AddCategory = () => {
  const categoryForm = useAddCategoryForm();
  return <AddCategoryForm {...categoryForm} />;
};
