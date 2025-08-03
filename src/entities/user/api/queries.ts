import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { userSchema, type User } from './contracts';

export const useCurrentUserQuery = () =>
  useQuery<User>({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const res = await axios.get('/api/user');
      return userSchema.validateSync(res.data, { strict: true });
    },
    staleTime: 1000 * 60 * 5, // 5 мин
    retry: 1,
  });
