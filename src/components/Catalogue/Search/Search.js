import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import * as bookService from '../../../services/bookService';
import CatalogueCard from '../CatalogueCard';

import styles from './Search.module.css';


const Search = () => {
    const [books, setBooks] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [foundBooks, setFoundBooks] = useState([]);
    const [noBooksToShow, setNoBooksToShow] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        setLoader(true);
        bookService.getAll()
            .then(res => {
                setBooks(Object.values(res));
                setLoader(false);
            })
            .catch(err => {
                setLoader(false);
                return;
            })
    }, []);

    const onSearchChangeHandler = (e) => {
        e.preventDefault();
        let searchedValue = e.target.value.toLowerCase();
        setSearchInput(searchedValue);
        searchParams.set('searching', searchedValue);
        setSearchParams(searchParams);
        
        if (searchedValue) {
            setNoBooksToShow(false);
            setFoundBooks(() => {
                let foundBooks = books.filter(x => {
                    if (
                        x.title.toLowerCase().includes(searchedValue)
                        || x.category.toLowerCase().includes(searchedValue)
                        || x.author.toLowerCase().includes(searchedValue)
                    ) {
                        return x;
                    } else {
                        return null;
                    }
                });
                if(foundBooks.length == 0) {
                    setNoBooksToShow(true);
                }

                return foundBooks.length > 0 ? foundBooks : [];
            })
        }




    }

    let showBooks = (foundBooks.length > 0 || noBooksToShow) ? foundBooks : books;

    const booksSection = showBooks?.length > 0
        ? showBooks.map(x => <CatalogueCard key={x._id} card={x} />)
        : (<div className="catalogue-nodata">
            <h2 className="catalogue-nodata-msg">No Books in database!</h2>
            <article className="catalogue-nodata-article-img">
                <img className="catalogue-nodata-img" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="no-database" />
            </article>
        </div>);


    return (
        <>
            <section className="styels.searchSection">
                <div className="search-colection">
                    <div className={styles.searchField}>
                        <label htmlFor="search" className={styles.searchFieldLabel}>Search here </label>
                        <input
                            type="text"
                            id={styles.search}
                            name="search"
                            placeholder="Write here..."
                            onChange={onSearchChangeHandler}
                            value={searchInput}
                        />
                    </div>
                    <ul className="catalogue-colection-list">
                        {loader
                            ? <BeatLoader color={'#36D7B7'} loading={loader} size={25} />
                            : booksSection
                        }
                    </ul>
                </div>

            </section>
        </>
    )
}

export default Search;