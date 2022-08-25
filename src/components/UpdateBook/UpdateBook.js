import { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as bookService from '../../services/bookService';
import { useNotificationContext, types} from '../../contexts/NotificationContext';


import './UpdateBook.css';

const UpdateBook = () => {
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    const {bookId } = useParams();
    const { showNotification } = useNotificationContext();

    useEffect(() => {
        bookService.getOne(bookId)
            .then(res => {
                setBook(res);
            })
            .catch(err => {
                console.error(err);
                navigate(`/details/${bookId}`)
            })
    },[bookId, navigate]);

    const updateHandler =(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {title, category, imageUrl, price, author, description} = Object.fromEntries(formData);

        if(title == '' || category == '' || imageUrl == '' || price == '' || author == '' || description == '') {
            showNotification('All fields are required', types.error)
            throw new Error('All fields are required');
        }
        const updatedBook = {title, category, imageUrl, price, author, description};

        bookService.update(bookId, updatedBook)
            .then(res => {
                showNotification('You have successfully updated ' + title + '!', types.info);
                navigate(`/details/${bookId}`);
            }).catch(err => {
                console.error(err.message);
                showNotification(err.message, types.error);
                return;
            })

    }

    return (
        <section className="update-section">
        <form className="update-form" method="POST" onSubmit={updateHandler}>
            <fieldset className="update-form-fieldset">
                <legend className="update-form-legend" >Update Book</legend>
                    <div className="update-form-field" >
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" defaultValue={book.title} />
                    </div>
                    <div className="update-form-field" >
                        <label htmlFor="category">Category</label>
                        <input type="text" id="category" name="category" defaultValue={book.category}/>
                    </div>
                  
                    <div className="update-form-field" >
                        <label htmlFor="image">Iamge</label>
                        <input type="text" id="image" name="imageUrl" defaultValue={book.imageUrl} />
                    </div>
                    <div className="update-form-field" >
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" name="price" defaultValue={book.price} />
                    </div>
                    <div className="update-form-field" >
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" name="author" defaultValue={book.author} />
                    </div>
                    <div className="update-form-field" >
                        <label htmlFor="description">Description</label>
                        <textarea type="text" id="description" name="description" defaultValue={book.description} />
                    </div>
                    <div className="update-form-field" >
                        <input type="submit" className="update-btn" value="Update Book" />
                    </div>
            </fieldset>
        </form>
    </section>
    )
}

export default UpdateBook;