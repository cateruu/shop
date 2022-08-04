import styles from './styles/product.module.css';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { removeItem, changeItemAmount } from '../../features/cart/cartSlice';

const Product = ({ id, image, name, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.nameContainer}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.price}>${price}</p>
        </div>
        <IconContext.Provider value={{ className: styles.remove }}>
          <MdOutlineDelete onClick={() => dispatch(removeItem({ id: id }))} />
        </IconContext.Provider>
      </div>
      <div className={styles.amountContainer}>
        <IconContext.Provider value={{ className: styles.arrows }}>
          <AiFillCaretUp
            onClick={() =>
              dispatch(changeItemAmount({ id: id, action: 'increase' }))
            }
          />
          <p className={styles.amount}>{amount}</p>
          <AiFillCaretDown
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem({ id: id }));
                return;
              }

              dispatch(changeItemAmount({ id: id, action: 'decrease' }));
            }}
          />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Product;
