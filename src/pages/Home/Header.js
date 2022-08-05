import styles from './styles/header.module.css';
import Filter from '../../components/Filter';
import { BsFilter } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { openFilter } from '../../features/filter/filterSlice';

const Header = () => {
  const { isOpen } = useSelector((state) => state.filter);
  const disptatch = useDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.filter} onClick={() => disptatch(openFilter())}>
        <IconContext.Provider value={{ className: styles.filterIcon }}>
          <BsFilter />
        </IconContext.Provider>
      </div>
      <AnimatePresence>{isOpen && <Filter />}</AnimatePresence>
    </header>
  );
};

export default Header;
