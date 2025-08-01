import { useEffect, useRef, useState } from 'react';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import { Button, Link } from '@/shared/UI';
import cn from 'classnames';
import styles from './Categories.module.scss';

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

export const Categories = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const updateScrollButtons = () => {
    const container = listRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollWidth - container.clientWidth - container.scrollLeft > 1
    );
  };

  const scrollBy = (direction: 'left' | 'right') => {
    const container = listRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === 'left' ? -200 : 200,
      behavior: 'smooth',
    });
  };

  const handleItemClick = (
    id: number,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    setActiveId(id);

    const container = listRef.current;
    const element = e.currentTarget;

    if (!container || !element) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const offset = 100;

    const leftDistance = elementRect.left - containerRect.left;
    const rightDistance = containerRect.right - elementRect.right;

    if (leftDistance < offset) {
      container.scrollBy({ left: -offset, behavior: 'smooth' });
    } else if (rightDistance < offset) {
      container.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    updateScrollButtons();
    const handleScroll = () => updateScrollButtons();

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

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
