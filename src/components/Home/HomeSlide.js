import Carousel from 'react-bootstrap/Carousel';
import HomeSlideItem from './HomeSlideItem';
const HomeSlide = () => {
  return (
    <Carousel>

      <HomeSlideItem />
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>No Books in the database!</h3>
        </Carousel.Caption>
      </Carousel.Item>

  
    </Carousel>
  );
}

export default HomeSlide;