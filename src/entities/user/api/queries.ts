import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import { userSchema, type User } from './contracts';

export const useCurrentUserQuery = () =>
  useQuery<User>({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const res = await apiClient.get('/api/user');
      return userSchema.validateSync(res.data, { strict: true });
    },
    staleTime: 1000 * 60 * 5, // 5 мин
    retry: 1,
  });
