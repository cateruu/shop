import styles from './styles/app.module.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { ReactComponent as Blob } from './images/blob.svg';

function App() {
  return (
    <div className={styles.container}>
      <Blob className={styles.blob} />
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
