import { useRef, type ChangeEvent } from 'react';
import { Button } from '@/shared/UI';

type TProps = {
  onImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const UploadImageButton = ({ onImageChange }: TProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        hidden
        onChange={onImageChange}
      />
      <Button type="button" variant="secondary" onClick={handleClick}>
        Загрузить изображение
      </Button>
    </>
  );
};
