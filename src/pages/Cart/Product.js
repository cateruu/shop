import styles from './styles/product.module.css';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

const Product = ({ image, name, price, amount }) => {
  return (
    <div className={styles.product}>
      <div>
        <img src={image} alt={name} />
        <div className={styles.container}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.amount}>${price}</p>
        </div>
        <div>
          <AiFillCaretUp />
          {amount}
          <AiFillCaretDown />
        </div>
      </div>
    </div>
  );
};

export default Product;
