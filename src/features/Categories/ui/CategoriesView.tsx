import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import { Button, Link } from '@/shared/UI';
import cn from 'classnames';
import styles from './Categories.module.scss';
import { type TUseCategories as TProps } from '../model/useCategories';

const categories = [
  { id: 1, title: 'Завтрак' },
  { id: 2, title: 'Хинкали' },
  { id: 3, title: 'Хлеб' },
  { id: 4, title: 'Соусы' },
  { id: 5, title: 'Завтрак' },
  { id: 6, title: 'Хинкали' },
  { id: 7, title: 'Хлеб' },
  { id: 8, title: 'Соусы' },
  { id: 9, title: 'Завтрак' },
  { id: 10, title: 'Хинкали' },
  { id: 11, title: 'Хлеб' },
  { id: 12, title: 'Соусы' },
];

export const CategoriesView = ({
  listRef,
  activeId,
  canScrollLeft,
  canScrollRight,
  scrollBy,
  handleItemClick,
}: TProps) => {
  return (
    <div className={styles.categories}>
      <Button onClick={() => scrollBy('left')} disabled={!canScrollLeft}>
        <CaretLeftFill />
      </Button>

      <div className={styles.categories__list} ref={listRef}>
        {categories.map(({ id, title }) => (
          <Link
            key={id}
            to={`#category${id}`}
            size="l"
            onClick={(e) => handleItemClick(id, e)}
            className={cn(styles.categories__item, {
              [styles.categories__item_selected]: activeId === id,
            })}
          >
            {title}
          </Link>
        ))}
      </div>

      <Button onClick={() => scrollBy('right')} disabled={!canScrollRight}>
        <CaretRightFill />
      </Button>
    </div>
  );
};
