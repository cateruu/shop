import styles from './styles/products.module.css';
import { BsFilter } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Products = () => {
  return (
    <main>
      <header className={styles.header}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.filter}>
          <IconContext.Provider value={{ className: styles.filterIcon }}>
            <BsFilter />
          </IconContext.Provider>
        </div>
      </header>
    </main>
  );
};

export default Products;
