import { Categories } from '@/features/Categories';
import { PageWrapper, Spinner, ErrorBanner, Empty } from '@/shared/UI';
// import { useGetBlocksQuery } from '@/entities/api';
import { DishesGrid } from '@/widgets/DishesGrid';

const isLoading = false;
const blocks = [
  {
    id: 1,
    title:
      'Мегрельское мжаве (ассорти из солений) Мегрельское мжаве (ассорти из солений)',
    price: 500,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sunt quis saepe molestiae illo qui et debitis, hic ipsa!',
    imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
    category_id: 1,
  },
  {
    id: 3,
    title: 'Мегрельское мжаве (ассорти из солений)',
    price: 500,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sunt quis saepe molestiae illo qui et debitis, hic ipsa!',
    imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
    category_id: 1,
  },
  {
    id: 4,
    title: 'Мегрельское мжаве (ассорти из солений)',
    price: 500,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sunt quis saepe molestiae illo qui et debitis, hic ipsa!',
    imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
    category_id: 1,
  },
  {
    id: 5,
    title: 'Мегрельское мжаве (ассорти из солений)',
    price: 500,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sunt quis saepe molestiae illo qui et debitis, hic ipsa!',
    imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
    category_id: 1,
  },
  {
    id: 6,
    title: 'Мегрельское мжаве (ассорти из солений)',
    price: 500,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sunt quis saepe molestiae illo qui et debitis, hic ipsa!',
    imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
    category_id: 1,
  },
  {
    id: 7,
    title: 'Мегрельское мжаве (ассорти из солений)',
    price: 500,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sunt quis saepe molestiae illo qui et debitis, hic ipsa!',
    imageUrl: 'https://vseopecheni.ru/images/new/hinkali.jpg',
    category_id: 1,
  },
  {
    id: 2,
    title: 'Хачапури по-аджарски',
    price: 500,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure sunt quis saepe molestiae illo qui et debitis, hic ipsa!',
    imageUrl:
      'https://klopotenko.com/wp-content/uploads/2020/06/Hachapyri-po-adzharski_siteWebNEW.jpg?v=1612196743',
    category_id: 2,
  },
];

const categories: Record<number, string> = {
  1: 'Категория раз',
  2: 'Категория два',
};

const error = null;

export const MainPage = () => {
  // const { data: blocks = [], isLoading, error } = useGetBlocksQuery();

  const blocksFormatted = Object.entries(
    blocks.reduce((result, dish) => {
      return {
        ...result,
        [dish.category_id]: [...(result[dish.category_id] ?? []), dish],
      };
    }, {})
  );

  console.log(blocksFormatted);

  if (error) {
    return <ErrorBanner message="Произошла ошибка при загрузке данных" />;
  }

  return (
    <PageWrapper isLoading={isLoading} fallbackUI={<Spinner />}>
      <Categories />
      {blocksFormatted.length > 0 ? (
        blocksFormatted.map(([id, dishes]) => (
          <DishesGrid key={id} id={id} title={categories[id]} dishes={dishes} />
        ))
      ) : (
        <Empty message="Ничего не найдено" />
      )}
    </PageWrapper>
  );
};
