import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetCarouselItemsQuery } from '../slices/carouselApiSlice';

const ProductCarousel = () => {
  const { data, isLoading, error } = useGetCarouselItemsQuery();

  console.log(JSON.stringify(data));

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-primary mb-4'>
      {data.map((item) => (
        <Carousel.Item key={item._id}>
          <Link to={`${item.link}`}>
            <Image 
              src={item.image} 
              alt={item.caption} 
              fluid 
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            />
            <Carousel.Caption className='carousel-caption'>
              <h2 className='text-white text-right'>
                {item.caption}
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
