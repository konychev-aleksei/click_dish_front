import { useModal } from '@/shared/UI/Modal';
import { AddCategory } from './AddCategory';
import { Button } from '@/shared/UI';

export const AddCategoryButton = () => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal({
      title: 'Добавить категорию',
      content: <AddCategory />,
    });
  };

  return <Button onClick={handleClick}>Добавить категорию</Button>;
};
