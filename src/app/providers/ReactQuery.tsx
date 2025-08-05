import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/shared/api/reactQuery';

export const withReactQuery = (component: () => React.ReactNode) => () => (
  <QueryClientProvider client={queryClient}>
    {component()}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
