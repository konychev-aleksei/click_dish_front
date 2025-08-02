import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required('Email обязателен')
    .email('Неверный формат email')
    .max(100, 'Максимум 100 символов'),

  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Минимум 6 символов')
    .max(100, 'Максимум 100 символов'),
});
