import styles from './styles/header.module.css';
import { IoReturnUpBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/' className={styles.container}>
        <IconContext.Provider value={{ className: styles.backIcon }}>
          <IoReturnUpBack />
        </IconContext.Provider>
        <span className={styles.backText}>a yoooo get me outta here</span>
      </Link>
      <h1 className={styles.header}>Cart</h1>
    </header>
  );
};

export default Header;
