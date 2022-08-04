import styles from './styles/product.module.css';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Product = ({ image, name, price, amount }) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.nameContainer}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
      <div className={styles.amountContainer}>
        <IconContext.Provider value={{ className: styles.arrows }}>
          <AiFillCaretUp />
          <p className={styles.amount}>{amount}</p>
          <AiFillCaretDown />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Product;
