import styles from './styles/buyModal.module.css';
import { motion } from 'framer-motion';

const BuyModal = () => {
  return (
    <motion.div
      key='buyModal'
      initial={{ right: '-100%' }}
      animate={{ right: 0 }}
      exit={{ right: '-100%' }}
      transition={{ duration: 0.3 }}
      className={styles.buy}
    >
      <p>Successful purchase</p>
    </motion.div>
  );
};

export default BuyModal;
