import styles from './styles/app.module.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import { ReactComponent as Blob } from './images/blob.svg';

function App() {
  return (
    <div className={styles.container}>
      <Blob className={styles.blob} />
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
