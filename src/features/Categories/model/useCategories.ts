import { useEffect, useRef, useState } from 'react';

export const useCategories = () => {
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

  return {
    listRef,
    activeId,
    canScrollLeft,
    canScrollRight,
    scrollBy,
    handleItemClick,
  } as const;
};

export type TUseCategories = ReturnType<typeof useCategories>;
