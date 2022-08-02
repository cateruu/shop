import styles from './styles/products.module.css';
import products from '../products.json';

const Products = () => {
  const productElements = products.map((product) => {
    return <div key={product.id}>{product.name}</div>;
  });

  return <section className={styles.container}>{productElements}</section>;
};

export default Products;
