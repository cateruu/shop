import { useEffect } from 'react';
import styles from './styles/cart.module.css';
import Header from './Header';
import Products from './Products';
import Total from './Total';
import Empty from './Empty';
import BuyModal from '../../components/BuyModal';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalCost } from '../../features/cart/cartSlice';
import { AnimatePresence } from 'framer-motion';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, amount } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.buyModal);

  useEffect(() => {
    dispatch(calculateTotalCost());
  }, [cartItems]);

  return (
    <main className={styles.main}>
      <Header />
      <Products />
      {amount < 1 ? <Empty /> : <Total />}
      <AnimatePresence>{isOpen && <BuyModal />}</AnimatePresence>
    </main>
  );
};

export default Cart;
