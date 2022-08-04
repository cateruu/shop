import styles from './styles/header.module.css';
import { BsFilter } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.filter}>
        <IconContext.Provider value={{ className: styles.filterIcon }}>
          <BsFilter />
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Header;
