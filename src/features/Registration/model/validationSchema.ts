import * as yup from 'yup';

export const registrationValidationSchema = yup.object({
  email: yup.string().required('Почта обязательна').email('Некорректная почта'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Минимум 6 символов'),
  confirmPassword: yup
    .string()
    .required('Подтверждение пароля обязательно')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});
