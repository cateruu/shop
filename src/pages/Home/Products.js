import Slider from 'react-slick';
import Product from './Product';
import 'slick-carousel/slick/slick.css';
import './styles/slider.css';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { useSelector } from 'react-redux';

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
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Products = () => {
  const { products } = useSelector((state) => state.filter);

  const productElements = products.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        description={product.description}
        price={product.price}
      />
    );
  });

  return (
    <section>
      <Slider {...settings}>{productElements}</Slider>
    </section>
  );
};

export default Products;
