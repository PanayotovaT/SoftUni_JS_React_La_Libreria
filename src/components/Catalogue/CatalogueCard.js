import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CatalogueCard = ({ card }) => {
    return (
        <Card style={{ width: '18rem' }} className="catalogue-card">
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.category}
                </Card.Text>
                <Card.Text>
                   {card.author}
                </Card.Text>
                <Link to={`/details/${card._id}`}><Button variant="primary">Details</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default CatalogueCard;