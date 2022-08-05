import styles from './styles/product.module.css';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { removeItem, changeItemAmount } from '../../features/cart/cartSlice';
import { motion } from 'framer-motion';

const Product = ({ id, image, name, price, amount, variants }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      key={id}
      variants={variants}
      exit={{ x: -100, opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className={styles.product}
    >
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
    </motion.div>
  );
};

export default Product;
