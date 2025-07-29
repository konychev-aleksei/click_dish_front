import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { Button } from '../Button/Button';

const meta: Meta<typeof TextField> = {
  title: 'UI/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Имя',
    placeholder: 'Введите имя',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Город',
    value: 'Москва',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Логин',
    placeholder: 'Введите логин',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Введите email',
    error: 'Неверный формат email',
  },
};

export const WithRef: Story = {
  render: (args) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div>
        <TextField {...args} ref={inputRef} />
        <Button
          onClick={() => {
            inputRef.current?.focus();
          }}
          style={{ marginTop: '10px' }}
        >
          Фокус на поле
        </Button>
      </div>
    );
  },
  args: {
    label: 'Поиск',
    placeholder: 'Нажми кнопку для фокуса',
  },
};
