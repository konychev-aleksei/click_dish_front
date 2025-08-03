import { type ReactNode } from 'react';
import cn from 'classnames';
import styles from './List.module.scss';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  itemClassName?: string;
  className?: string;
  emptyText?: string;
};

export const List = <T,>({
  items,
  renderItem,
  className,
  itemClassName,
  emptyText = 'Список пуст',
}: ListProps<T>) => {
  if (!items.length) {
    return <div className={cn(styles.empty, className)}>{emptyText}</div>;
  }

  return (
    <ul className={cn(styles.list, className)}>
      {items.map((item, index) => (
        <li key={index} className={cn(styles.item, itemClassName)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};
