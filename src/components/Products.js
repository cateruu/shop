import styles from './styles/products.module.css';
import products from '../products.json';
import Slider from 'react-slick';
import { IoAdd } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Products = () => {
  const productElements = products.map((product) => {
    return (
      <div key={product.id} className={styles.product}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.description}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.desc}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
          <div className={styles.add}>
            <IconContext.Provider value={{ className: styles.addIcon }}>
              <IoAdd />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  });

  return <section className={styles.container}>{productElements}</section>;
};

export default Products;
