import styles from './styles/total.module.css';
import { useSelector } from 'react-redux';

const Total = () => {
  const { total } = useSelector((state) => state.cart);
  return (
    <section>
      <div className={styles.total}>
        <h3 className={styles.header}>Total</h3>
        <p className={styles.price}>${total.toFixed(2)}</p>
      </div>
      <div>
        <button className={`${styles.buy} ${styles.btn}`}>Buy</button>
        <button className={`${styles.clear} ${styles.btn}`}>Clear</button>
      </div>
    </section>
  );
};

export default Total;
