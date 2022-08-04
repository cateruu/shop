import styles from './styles/product.module.css';
import { IoAdd } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

const Product = ({ id, image, name, description, price }) => {
  const dispatch = useDispatch();

  return (
    <div key={id} className={styles.product}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.description}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{description}</p>
        <p className={styles.price}>${price}</p>
        <div
          className={styles.add}
          onClick={() =>
            dispatch(
              addItem({ id: id, name: name, image: image, price: price })
            )
          }
        >
          <IconContext.Provider value={{ className: styles.addIcon }}>
            <IoAdd />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Product;
