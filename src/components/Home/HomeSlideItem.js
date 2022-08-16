import Carousel from 'react-bootstrap/Carousel';

const HomeSlideItem = () => {

    return (
    
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://data.europa.eu/sites/default/files/news/2020-08-06-edp_book_club.png"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default HomeSlideItem;