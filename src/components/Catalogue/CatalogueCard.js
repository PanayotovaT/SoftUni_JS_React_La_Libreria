import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CatalogueCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Category
                </Card.Text>
                <Card.Text>
                   Author
                </Card.Text>
                <Link to="/details/bookId"><Button variant="primary">Details</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default CatalogueCard;