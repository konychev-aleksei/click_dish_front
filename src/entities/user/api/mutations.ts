import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import {
  type LoginRequest,
  type RegisterRequest,
  type UpdateUserRequest,
  type ResetPasswordRequest,
  type DoResetPasswordRequest,
  type ResendConfirmationRequest,
  userSchema,
} from './contracts';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: async (data: LoginRequest) => {
      const res = await axios.post('/api/users/login', data);
      return userSchema.validateSync(res.data);
    },
  });

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: async (data: RegisterRequest) => {
      const res = await axios.post('/api/users', data);
      return userSchema.validateSync(res.data.user);
    },
  });

export const useUpdateUserMutation = () =>
  useMutation({
    mutationFn: async (data: UpdateUserRequest) => {
      const res = await axios.patch('/api/users', data);
      return userSchema.validateSync(res.data);
    },
  });

export const useLogoutMutation = () =>
  useMutation({
    mutationFn: async () => {
      await axios.delete('/api/users/logout');
    },
  });

export const useDeleteUserMutation = () =>
  useMutation({
    mutationFn: async () => {
      await axios.delete('/api/users');
    },
  });

export const confirmEmail = async (confirmationToken: string) => {
  const res = await axios.get('/api/users/confirmation', {
    params: { confirmation_token: confirmationToken },
  });
  return userSchema.validateSync(res.data);
};

export const useResendConfirmationMutation = () =>
  useMutation({
    mutationFn: async (data: ResendConfirmationRequest) => {
      await axios.post('/api/users/confirmation', data);
    },
  });

export const useRequestPasswordResetMutation = () =>
  useMutation({
    mutationFn: async (data: ResetPasswordRequest) => {
      await axios.post('/api/users/reset_password', data);
    },
  });

export const useResetPasswordMutation = () =>
  useMutation({
    mutationFn: async (data: DoResetPasswordRequest) => {
      const res = await axios.patch('/api/users/reset_password', data);
      return userSchema.validateSync(res.data);
    },
  });
