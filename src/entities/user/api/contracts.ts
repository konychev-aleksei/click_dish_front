import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const registerSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const updateUserSchema = yup.object({
  email: yup.string().email().optional(),
  current_password: yup.string().optional(),
  password: yup.string().optional(),
  password_confirmation: yup.string().optional(),
});

export const resetPasswordRequestSchema = yup.object({
  email: yup.string().email().required(),
});

export const doResetPasswordSchema = yup.object({
  reset_password_token: yup.string().required(),
  password: yup.string().required(),
});

export const resendConfirmationSchema = yup.object({
  email: yup.string().email().required(),
});

export const userSchema = yup.object({
  id: yup.number().required(),
  email: yup.string().email().required(),
});

export type User = yup.InferType<typeof userSchema>;
export type LoginRequest = yup.InferType<typeof loginSchema>;
export type RegisterRequest = yup.InferType<typeof registerSchema>;
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
