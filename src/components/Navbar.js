import styles from './styles/navbar.module.css';
import { IconContext } from 'react-icons';
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  console.log(amount);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.name}>Fruits</h1>
      <div className={styles.container}>
        <IconContext.Provider value={{ className: styles.cart }}>
          <BsBag />
        </IconContext.Provider>
        {amount > 0 ? <div className={styles.cartAmount}>{amount}</div> : null}
      </div>
    </nav>
  );
};

export default Navbar;
