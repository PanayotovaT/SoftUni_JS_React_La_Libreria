import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as bookService from '../../services/bookService';
import { useAuthContext } from '../../contexts/AuthContext';

import './Details.css'

const Details = () => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const { user } = useAuthContext();

    useEffect(() => {
        bookService.getOne(bookId)
            .then(res => {
                setBook(res)
            }).catch(err => {
                console.log(err);
                navigate('/');
            })
    }, [bookId, navigate]);

    const deleteHandler = (e) =>{
        e.preventDefault();

        bookService.deleteBook(bookId)
            .then(res => {
                navigate('/catalogue');
            })
            .catch(err => {
                console.error(err.message);
                return;
            })
    }

    const ownerLinks = (<>
        <Link to={`/update/${book._id}`} className="details-btn">Update</Link>
        <Link to={`/delete/${book._id}`} className="details-btn" onClick={deleteHandler}>Delete</Link>
    </>);

    const userLinks = (<>
        <Link to="/favorite-book" className="details-btn">Add to favourite</Link>

    </>)

    return (
        <section className="details-section">
            <article className="details-article-image">
                <img className="details-image" src={book.imageUrl} alt="details-img" />
            </article>
            <article className="details-article-content">
                <h2 className="details-article-content-title">{book.title}</h2>
                <h5 className="details-article-content-category">{book.category}</h5>
                <p className="details-article-content-description">{book.description}</p>
                <p className="details-article-content-price">{book.price}</p>
                <p className="details-article-content-author">{book.author}</p>

                <div className="details-article-content-btns">
                    <Link to="/catalogue" className="details-btn">Back</Link>
                    {user._id == book._ownerId 
                        ? ownerLinks
                        : userLinks
                    }
                </div>
            </article>
        </section>
    );
}

export default Details;
