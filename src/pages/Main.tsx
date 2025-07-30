import { PageWrapper, Spinner, ErrorBanner, Empty } from '@/shared/UI';
import { useGetBlocksQuery } from '@/entities/api';
import { DishesGrid } from '@/features/DishesGrid';

export const Main = () => {
  const { data: blocks = [], isLoading, error } = useGetBlocksQuery();

  if (error) {
    return <ErrorBanner message="Произошла ошибка при загрузке данных" />;
  }

  return (
    <PageWrapper isLoading={isLoading} fallbackUI={<Spinner />}>
      {blocks.length > 0 ? (
        blocks.map((block) => (
          <DishesGrid
            key={block.id}
            title={block.title}
            queryParams={block.queryParams}
          />
        ))
      ) : (
        <Empty message="Ничего не найдено" />
      )}
    </PageWrapper>
  );
};
