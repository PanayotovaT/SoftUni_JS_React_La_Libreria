import { useState, useEffect } from 'react';

import * as bookService from '../../services/bookService';
import { useAuthContext } from '../../contexts/AuthContext';

import ProfileCard from './ProfileCard';
import './MyProfile.css';

const MyProfile = () => {
    const [books, setBooks] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        bookService.getMyBooks(user._id)
            .then(data => {
                setBooks(Object.values(data))
            })
            .catch(err => {
                console.log(err.message);
                return;
            })
    }, [user._id]);

    return (
        <section className="profile-section">
            <div className="profile-colection">
                <h1 className="profile-colection-title">Welcome to My Profile</h1>
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
                <ul className="profile-colection-list">
                    {books.length > 0
                        ? books.map(x => <ProfileCard key="x._id" card={x} />)
                        : (<div className="profile-nodata">
                            <h2 className="profile-nodata-msg">No Books in database!</h2>
                            <article className="profile-nodata-article-img">
                                <img className="profile-nodata-img" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt="no-database" />
                            </article>
                        </div>)
                    }
                </ul>
            </div>

        </section>
    )
}

export default MyProfile;
