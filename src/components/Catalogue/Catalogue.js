import { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";

import * as bookService from '../../services/bookService';

import CatalogueCard from './CatalogueCard';
import './Catalogue.css';

const Catalogue = () => {
    const [loader, setLoader] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setLoader(true);
        bookService.getAll()
            .then(data => {
                setBooks(Object.values(data));
                setLoader(false);
            })
            .catch(err => {
                setLoader(false);
                return;
            })
    }, []);

    const booksSection = books.length > 0
        ? books.map(x => <CatalogueCard key={x._id} card={x} />)
        : (<div className="catalogue-nodata">
            <h2 className="catalogue-nodata-msg">No Books in database!</h2>
            <article className="catalogue-nodata-article-img">
                <img className="catalogue-nodata-img" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="no-database" />
            </article>
        </div>);

    return (
        <section className="catalogue-section">
            <div className="catalogue-colection">
                <h1 className="catalogue-colection-title">Welcome to the Books Catalogue</h1>
                <ul className="catalogue-colection-list">
                    {loader 
                        ? <BeatLoader color={'#36D7B7'} loading={loader} size={25} />
                        : booksSection
                    }
                </ul>
            </div>

        </section>
    )
}

export default Catalogue;