import styles from './styles/filter.module.css';
import { motion } from 'framer-motion';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { closeFilter, sortProducts } from '../features/filter/filterSlice';

const container = {
  closed: { scale: 0, x: -80, transition: { delay: 0.3 } },
  open: {
    scale: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.01,
      delayChildren: 0.1,
    },
  },
};

const option = {
  closed: { scale: 0 },
  open: { scale: 1 },
};

const Filter = () => {
  const { isOpen } = useSelector((state) => state.filter);
  const disptatch = useDispatch();

  return (
    <motion.ul
      className={styles.filter}
      variants={container}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      exit={{ scale: 0, x: -50 }}
    >
      <motion.li
        className={styles.option}
        variants={option}
        onClick={() => {
          disptatch(sortProducts({ type: 'name', action: 'ascending' }));
          disptatch(closeFilter());
        }}
      >
        <span className={styles.text}>Name</span>
        <BsChevronDown className={styles.icon} />
      </motion.li>
      <motion.li
        className={styles.option}
        variants={option}
        onClick={() => {
          disptatch(sortProducts({ type: 'name', action: 'descending' }));
          disptatch(closeFilter());
        }}
      >
        Name <BsChevronUp className={styles.icon} />
      </motion.li>
      <motion.li
        className={styles.option}
        variants={option}
        onClick={() => {
          disptatch(sortProducts({ type: 'price', action: 'ascending' }));
          disptatch(closeFilter());
        }}
      >
        Price <BsChevronDown className={styles.icon} />
      </motion.li>
      <motion.li
        className={styles.option}
        variants={option}
        onClick={() => {
          disptatch(sortProducts({ type: 'price', action: 'descending' }));
          disptatch(closeFilter());
        }}
      >
        Price <BsChevronUp className={styles.icon} />
      </motion.li>
    </motion.ul>
  );
};

export default Filter;
