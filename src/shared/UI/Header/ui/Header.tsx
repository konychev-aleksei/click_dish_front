import { Text } from '../../Text';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Text size="l" weight="bold">
        ClickDish
      </Text>
    </header>
  );
};
