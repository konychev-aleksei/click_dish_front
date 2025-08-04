import { useCategories } from '../model/useCategories';
import { CategoriesView } from './CategoriesView';

export const Categories = () => {
  const categoriesData = useCategories();
  return <CategoriesView {...categoriesData} />;
};
