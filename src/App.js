import styles from './styles/app.module.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import ClearModal from './components/ClearModal';
import { ReactComponent as Blob } from './images/blob.svg';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const { isOpen } = useSelector((state) => state.clearModal);

  return (
    <div className={styles.container}>
      <Blob className={styles.blob} />
      {isOpen && <ClearModal />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
