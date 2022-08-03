import styles from './styles/navbar.module.css';
import { IconContext } from 'react-icons';
import { BsBag } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.name}>Fruits</h1>
      <IconContext.Provider value={{ className: styles.cart }}>
        <BsBag />
      </IconContext.Provider>
    </nav>
  );
};

export default Navbar;
