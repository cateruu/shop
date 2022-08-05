import styles from './styles/total.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../features/clearModal/clearModalSlice';
import { clearCart } from '../../features/cart/cartSlice';
import { hideModal, showModal } from '../../features/buyModal/buyModalSlice';

const Total = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showBuyModal = () => {
    dispatch(showModal());
    dispatch(clearCart());

    setTimeout(() => dispatch(hideModal()), 2000);
  };

  return (
    <section className={styles.container}>
      <div className={styles.total}>
        <h3 className={styles.header}>Total</h3>
        <p className={styles.price}>${total.toFixed(2)}</p>
      </div>
      <div>
        <button
          className={`${styles.buy} ${styles.btn}`}
          onClick={showBuyModal}
        >
          Buy
        </button>
        <button
          className={`${styles.clear} ${styles.btn}`}
          onClick={() => dispatch(openModal())}
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default Total;
