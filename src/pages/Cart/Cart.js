import styles from './styles/cart.module.css';
import { IoReturnUpBack } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import Products from './Products';

const Cart = () => {
  return (
    <main className={styles.main}>
      <Link to='/' className={styles.container}>
        <IconContext.Provider value={{ className: styles.backIcon }}>
          <IoReturnUpBack />
        </IconContext.Provider>
        <span className={styles.backText}>a yoooo get me outta here</span>
      </Link>
      <h1 className={styles.header}>Cart</h1>
      <Products />
    </main>
  );
};

export default Cart;
