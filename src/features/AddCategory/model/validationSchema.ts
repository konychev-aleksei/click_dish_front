import * as yup from 'yup';

export const addCategoryValidationSchema = yup.object({
  title: yup
    .string()
    .required('Название обязательно')
    .max(60, 'Максимум 60 символов'),
});
