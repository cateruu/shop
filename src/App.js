import styles from './styles/app.module.css';
import Navbar from './components/Navbar';
import { ReactComponent as Blob } from './images/blob.svg';

function App() {
  return (
    <main className={styles.main}>
      <Blob className={styles.blob} />
      <Navbar />
    </main>
  );
}

export default App;
