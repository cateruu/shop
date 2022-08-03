import styles from './styles/app.module.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { ReactComponent as Blob } from './images/blob.svg';

function App() {
  return (
    <div className={styles.container}>
      <Blob className={styles.blob} />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
