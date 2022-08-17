import { useState, useEffect } from 'react';

import * as bookService from '../../services/bookService';

import CatalogueCard from './CatalogueCard';
import './Catalogue.css';

const Catalogue = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll()
            .then(data => {
                setBooks(Object.values(data))
            })
            .catch(err => {
                console.log(err.message);
                return;
            })
    }, []);

    return (
        <section className="catalogue-section">
            <div className="catalogue-colection">
                <h1 className="catalogue-colection-title">Welcome to the Books Catalogue</h1>
                <ul className="catalogue-colection-list">
                    {books.length > 0
                        ? books.map(x => <CatalogueCard key={x._id} card={x} />)
                        : (<div className="catalogue-nodata">
                            <h2 className="catalogue-nodata-msg">No Books in database!</h2>
                            <article className="catalogue-nodata-article-img">
                                <img className="catalogue-nodata-img" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="no-database" />
                            </article>
                        </div>)
                    }
                </ul>
            </div>

        </section>
    )
}

export default Catalogue;