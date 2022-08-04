import styles from './styles/home.module.css';
import Header from './Header';
import Products from './Products';

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Products />
    </main>
  );
};

export default Home;
