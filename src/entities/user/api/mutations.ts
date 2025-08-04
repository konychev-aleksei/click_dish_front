import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import {
  type LoginAndRegisterRequest,
  type UpdateUserRequest,
  type ResetPasswordRequest,
  type DoResetPasswordRequest,
  type ResendConfirmationRequest,
  userSchema,
} from './contracts';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: async (data: LoginAndRegisterRequest) => {
      const res = await apiClient.post('/api/users/login', data);
      return userSchema.validateSync(res.data);
    },
  });

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: async (data: LoginAndRegisterRequest) => {
      const res = await apiClient.post('/api/users', data);
      return userSchema.validateSync(res.data.user);
    },
  });

export const useUpdateUserMutation = () =>
  useMutation({
    mutationFn: async (data: UpdateUserRequest) => {
      const res = await apiClient.patch('/api/users', data);
      return userSchema.validateSync(res.data);
    },
  });

export const useLogoutMutation = () =>
  useMutation({
    mutationFn: async () => {
      await apiClient.delete('/api/users/logout');
    },
  });

export const useDeleteUserMutation = () =>
  useMutation({
    mutationFn: async () => {
      await apiClient.delete('/api/users');
    },
  });

export const confirmEmail = async (confirmationToken: string) => {
  const res = await apiClient.get('/api/users/confirmation', {
    params: { confirmation_token: confirmationToken },
  });
  return userSchema.validateSync(res.data);
};

export const useResendConfirmationMutation = () =>
  useMutation({
    mutationFn: async (data: ResendConfirmationRequest) => {
      await apiClient.post('/api/users/confirmation', data);
    },
  });

export const useRequestPasswordResetMutation = () =>
  useMutation({
    mutationFn: async (data: ResetPasswordRequest) => {
      await apiClient.post('/api/users/reset_password', data);
    },
  });

export const useResetPasswordMutation = () =>
  useMutation({
    mutationFn: async (data: DoResetPasswordRequest) => {
      const res = await apiClient.patch('/api/users/reset_password', data);
      return userSchema.validateSync(res.data);
    },
  });
