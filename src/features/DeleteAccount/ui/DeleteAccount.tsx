import { useDeleteUserMutation } from '@/entities/user/api/mutations';
import { Button } from '@/shared/UI';

export const DeleteAccountButton = () => {
  const { mutateAsync: deleteUser } = useDeleteUserMutation();

  const handleClick = () => {
    deleteUser();
  };

  return (
    <Button onClick={handleClick} width={300} variant="secondary">
      Удалить аккаунт
    </Button>
  );
};
