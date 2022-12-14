import { useState, useEffect } from 'react';
import * as bookService from '../../services/bookService';
import BeatLoader from "react-spinners/BeatLoader";

import './Home.css';
import HomeCard from './HomeCard'

const Home = () => {
    const [loader, setLoader] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setLoader(true);

        setTimeout(() => {
            bookService.getAll()
            .then(res => {
                setBooks(Object.values(res));
                setLoader(false);
            })
            .catch(err => {
                console.error(err.message);
                setLoader(false);
            })
        }, 300);
    
    }, []);

    const booksSection = books.length > 0 
    ? books.slice(0,3).map(x => <HomeCard card={x} key={x._id} />)
    :   (<article className="home-nodata-image-article">
             <h1>No books in the database!</h1>
             <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" alt="no data" />
        </article>);


    return (
        <section className="home-section">
            <article className="home-description">
                <h1>La Libreria</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

            </article>
            <section className="home-book-section">
                {loader 
                    ? <BeatLoader color={'#36D7B7'} loading={loader} size={25} />
                    : booksSection
                }
                

            </section >


        </section>
    )
}


export default Home;