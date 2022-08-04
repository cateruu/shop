import styles from './styles/total.module.css';
import { useSelector } from 'react-redux';

const Total = () => {
  const { total } = useSelector((state) => state.cart);
  return (
    <section className={styles.total}>
      <h3 className={styles.header}>Total</h3>
      <p className={styles.price}>${total.toFixed(2)}</p>
    </section>
  );
};

export default Total;
