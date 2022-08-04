import styles from './styles/navbar.module.css';
import { IconContext } from 'react-icons';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav className={styles.nav}>
      <Link to='/'>
        <h1 className={styles.name}>Fruits</h1>
      </Link>
      <div className={styles.container}>
        <Link to='/cart'>
          <IconContext.Provider value={{ className: styles.cart }}>
            <BsBag />
          </IconContext.Provider>
        </Link>
        {amount > 0 ? <div className={styles.cartAmount}>{amount}</div> : null}
      </div>
    </nav>
  );
};

export default Navbar;
