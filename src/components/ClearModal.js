import styles from './styles/clearModal.module.css';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/clearModal/clearModalSlice';
import { useDispatch } from 'react-redux';

const ClearModal = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <p>Remove all items from your shopping cart?</p>
        <button
          className={`${styles.btn} ${styles.confirm}`}
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
        <button
          className={`${styles.btn} ${styles.cancel}`}
          onClick={() => dispatch(closeModal())}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ClearModal;
