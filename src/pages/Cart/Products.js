import styles from './styles/products.module.css';
import { useSelector } from 'react-redux';
import Product from './Product';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const procuctAnimation = {
  hidden: { scale: 0, x: -100 },
  show: { scale: 1, x: 0 },
};

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
        variants={procuctAnimation}
      />
    );
  });

  return (
    <motion.section
      variants={container}
      initial='hidden'
      animate='show'
      className={styles.products}
    >
      <AnimatePresence>{productElements}</AnimatePresence>
    </motion.section>
  );
};

export default Products;
