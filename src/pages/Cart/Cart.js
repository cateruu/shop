import { useEffect } from 'react';
import styles from './styles/cart.module.css';
import Header from './Header';
import Products from './Products';
import Total from './Total';
import { useDispatch } from 'react-redux';
import { calculateTotalCost } from '../../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalCost());
  }, []);

  return (
    <main className={styles.main}>
      <Header />
      <Products />
      <Total />
    </main>
  );
};

export default Cart;
