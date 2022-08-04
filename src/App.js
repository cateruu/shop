import styles from './styles/app.module.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { ReactComponent as Blob } from './images/blob.svg';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
      <Blob className={styles.blob} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
