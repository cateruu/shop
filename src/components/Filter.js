import styles from './styles/filter.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const container = {
  closed: { scale: 0, x: -80, transition: { delay: 0.3 } },
  open: {
    scale: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.03,
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

  return (
    <AnimatePresence>
      <motion.ul
        className={styles.filter}
        variants={container}
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.li
          className={styles.option}
          variants={option}
          exit={{ sclae: 0 }}
        >
          <span className={styles.text}>Name</span>
          <BsChevronDown className={styles.icon} />
        </motion.li>
        <motion.li className={styles.option} variants={option}>
          Name <BsChevronUp className={styles.icon} />
        </motion.li>
        <motion.li className={styles.option} variants={option}>
          Price <BsChevronDown className={styles.icon} />
        </motion.li>
        <motion.li className={styles.option} variants={option}>
          Price <BsChevronUp className={styles.icon} />
        </motion.li>
      </motion.ul>
    </AnimatePresence>
  );
};

export default Filter;
