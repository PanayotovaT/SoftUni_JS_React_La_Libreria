import Card from 'react-bootstrap/Card';

import './HomeCard.css';

const HomeCard = ({ card }) => {
    return (
        <Card style={{ width: '18rem' }} className="home-card">
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.category}
                </Card.Text>
                <Card.Text>
                   {card.author}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default HomeCard;