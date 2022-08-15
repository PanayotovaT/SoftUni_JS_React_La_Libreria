import { Link } from 'react-router-dom';

import './Details.css'

const Details = () => {

    return (
        <section className="details-section">
            <article className="details-article-image">
                <img className="details-image" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="details-img" />
            </article>
            <article className="details-article-content">
                <h2 className="details-article-content-title">Title</h2>
                <h5 className="details-article-content-category">Category</h5>
                <p className="details-article-content-description">Description</p>
                <p className="details-article-content-price">Price</p>
                <p className="details-article-content-author">author</p>

                <div className="details-article-content-btns">
                    <Link to="/catalogue" className="details-btn">Back</Link>
                    <Link to="/favorite-book" className="details-btn">Add to favourite</Link>
                    <Link to="/update/bookId" className="details-btn">Update</Link>
                    <Link to="/delete/bookId" className="details-btn">Delete</Link>
                </div>
            </article>
        </section>
    );
}

export default Details;
