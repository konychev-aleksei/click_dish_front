import { Link } from '../../Link';
import { Text } from '../../Text';
import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <Text weight="bold">ООО «КликДиш»</Text>
        <Text>ИНН: 1234567890</Text>
        <Text>ОГРН: 1234567890123</Text>
        <Text>Адрес: 123456, г. Москва, ул. Примерная, д. 1</Text>
        <Text>Телефон: +7 (495) 123-45-67</Text>
        <Text>Email: info@clickdish.ru</Text>
      </div>
      <div className={styles.links}>
        <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Политика конфиденциальности
        </Link>
        <Link to="/terms-of-use" target="_blank" rel="noopener noreferrer">
          Пользовательское соглашение
        </Link>
      </div>
      <Text>© {currentYear} ООО «КликДиш». Все права защищены.</Text>
    </footer>
  );
};
