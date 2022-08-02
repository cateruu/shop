import styles from './styles/container.module.css';
import Header from './Header';
import Products from './Products';

const Container = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Products />
    </main>
  );
};

export default Container;
