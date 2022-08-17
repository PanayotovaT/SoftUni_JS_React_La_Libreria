import Carousel from 'react-bootstrap/Carousel';

import './HomeSlide.css';
const HomeSlide = ({
  books
}) => {

  const data = books.map(x => {
    return (
      <Carousel.Item key={x._id} className="carousel-item">
        <img
          className="d-block w-100"
          src={x.imageUrl}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{x.title}</h3>
          <p>
            {x.author}
          </p>
        </Carousel.Caption>
      </Carousel.Item>)
  });

  const noData= (<Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src="https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>No Data in the database</h3>
    </Carousel.Caption>
  </Carousel.Item>);

  return (
    <Carousel className="carousel-top">
      {books.length > 0 
        ? data
        : noData

      }
    </Carousel>
  );
}

export default HomeSlide;