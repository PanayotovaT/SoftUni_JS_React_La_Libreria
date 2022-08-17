import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './ProfileCard.css';

const ProfileCard = ({ card }) => {
    return (
        <Card style={{ width: '18rem' }} className="profile-card">
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

export default ProfileCard;