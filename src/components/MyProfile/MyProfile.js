import BeatLoader from "react-spinners/BeatLoader";
import { useState, useEffect } from 'react';

import * as bookService from '../../services/bookService';
import { useAuthContext } from '../../contexts/AuthContext';

import ProfileCard from './ProfileCard';
import './MyProfile.css';

const MyProfile = () => {
    const [loader, setLoader ] = useState(false);
    const [books, setBooks] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        setLoader(true);

        bookService.getMyBooks(user._id)
            .then(data => {
                setBooks(Object.values(data));
                setLoader(false);
            })
            .catch(err => {
                setLoader(false);
                return;
            })
    }, [user._id]);

    const booksSection = books.length > 0
        ? books.map(x => <ProfileCard key="x._id" card={x} />)
        : (<div className="profile-nodata">
            <h2 className="profile-nodata-msg">No Books in database!</h2>
            <article className="profile-nodata-article-img">
                <img className="profile-nodata-img" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="no-database" />
            </article>
        </div>);

    return (
        <section className="profile-section">
            <div className="profile-colection">
                <h1 className="profile-colection-title">Welcome to My Profile</h1>
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
                <ul className="profile-colection-list">
                    {loader
                        ? <BeatLoader color={'#36D7B7'} loading={loader} size={25} />
                        : booksSection
                    }
                </ul>
            </div>

        </section>
    )
}

export default MyProfile;
