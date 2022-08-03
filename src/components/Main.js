import styles from './styles/container.module.css';
import Header from './Header';
import Products from './Products';

const Main = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Products />
    </main>
  );
};

export default Main;
