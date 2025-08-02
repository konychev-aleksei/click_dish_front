import { Button } from '../../Button';
import { Link } from '../../Link';
import { Text } from '../../Text';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Text size="l" weight="bold" className={styles.header__logo}>
        ClickDish
      </Text>
      <Link to="/user/login">
        <Button>Войти</Button>
      </Link>
      <Link to="/user/registration">
        <Button variant="secondary">Регистрация</Button>
      </Link>
    </header>
  );
};
