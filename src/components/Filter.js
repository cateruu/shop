import styles from './styles/filter.module.css';
import { motion } from 'framer-motion';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const option = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const Filter = () => {
  return (
    <motion.ul
      className={styles.filter}
      variants={container}
      initial='hidden'
      animate='show'
    >
      <motion.li className={styles.option} variants={option}>
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
  );
};

export default Filter;
