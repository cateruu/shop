import styles from './styles/total.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../features/clearModal/clearModalSlice';

const Total = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className={styles.container}>
      <div className={styles.total}>
        <h3 className={styles.header}>Total</h3>
        <p className={styles.price}>${total.toFixed(2)}</p>
      </div>
      <div>
        <button className={`${styles.buy} ${styles.btn}`}>Buy</button>
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
