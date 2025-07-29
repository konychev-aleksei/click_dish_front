import styles from './Categories.module.scss';

const categories = [{ id: 1, title: 'Хинкали' }];

export const Categories = () => {
  return (
    <div className={styles.categories}>
      {categories.map(({ id, title }) => (
        <span key={id} className={styles.categories__item}>
          {title}
        </span>
      ))}
    </div>
  );
};
