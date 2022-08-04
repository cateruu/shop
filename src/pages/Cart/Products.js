import styles from './styles/products.module.css';
import { useSelector } from 'react-redux';
import Product from './Product';

const Products = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const productElements = cartItems.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        amount={product.amount}
      />
    );
  });

  return <section className={styles.products}>{productElements}</section>;
};

export default Products;
