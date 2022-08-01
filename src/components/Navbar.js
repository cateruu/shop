import { useState } from 'react';
import styles from './styles/navbar.module.css';
import { BsBag } from 'react-icons/bs';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <nav className={styles.nav}>
      <h1 className={styles.name}>Fruits</h1>
      <div className={styles.container}>
        <input
          type='text'
          placeholder='Search'
          onChange={handleChange}
          className={styles.input}
          value={searchInput}
        />
        <BsBag className={styles.cart} />
      </div>
    </nav>
  );
};

export default Navbar;
