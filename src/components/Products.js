import styles from './styles/products.module.css';
import products from '../products.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './styles/slider.css';
import { IoAdd } from 'react-icons/io5';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { IconContext } from 'react-icons';

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <MdNavigateBefore />
    </div>
  );
};

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <MdNavigateNext />
    </div>
  );
};

const settings = {
  className: 'slider',
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Products = () => {
  const productElements = products.map((product) => {
    return (
      <div key={product.id} className={styles.product}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.description}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.desc}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
          <div className={styles.add}>
            <IconContext.Provider value={{ className: styles.addIcon }}>
              <IoAdd />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className={styles.container}>
      <Slider {...settings}>{productElements}</Slider>
    </section>
  );
};

export default Products;
