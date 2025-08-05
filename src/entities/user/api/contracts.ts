import * as yup from 'yup';

export const loginAndRegisterSchema = yup.object({
  user: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }),
});

export const updateUserSchema = yup.object({
  email: yup.string().email().optional(),
  current_password: yup.string().optional(),
  password: yup.string().optional(),
  password_confirmation: yup.string().optional(),
});

export const resetPasswordRequestSchema = yup.object({
  user: yup.object({
    email: yup.string().email().required(),
  }),
});

export const doResetPasswordSchema = yup.object({
  user: yup.object({
    reset_password_token: yup.string().required(),
    password: yup.string().required(),
  }),
});

export const resendConfirmationSchema = yup.object({
  email: yup.string().email().required(),
});

export const userSchema = yup.object({
  id: yup.number().required(),
  email: yup.string().email().required(),
});

export type User = yup.InferType<typeof userSchema>;
export type LoginAndRegisterRequest = yup.InferType<
  typeof loginAndRegisterSchema
>;
export type UpdateUserRequest = yup.InferType<typeof updateUserSchema>;
export type ResetPasswordRequest = yup.InferType<
  typeof resetPasswordRequestSchema
>;
export type DoResetPasswordRequest = yup.InferType<
  typeof doResetPasswordSchema
>;
export type ResendConfirmationRequest = yup.InferType<
  typeof resendConfirmationSchema
>;
