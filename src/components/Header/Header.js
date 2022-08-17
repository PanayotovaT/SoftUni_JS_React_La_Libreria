import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';


import './Header.css';
const Header = () => {
    const { isAuthenticated } = useAuthContext();

    const activeClass = ({ isActive }) => {
        return isActive ? 'active-link libreria-header-list-link' : 'libreria-header-list-link';
    }

    const userLinks = (<>
        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/create">Create</NavLink></li>
        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/my-profile">My Profile</NavLink></li>
        <li className="libreria-header-list-item"><NavLink className="libreria-header-list-link" to="/logout">Logout</NavLink></li>
    
    </>);
    const guestLinks = (<>
        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/login">Sign In</NavLink></li>
        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/register">Register</NavLink></li>
    </>)
    return (
        <header className="libreria-header">
            <nav className="libreria-header-nav">
                <ul className="libreria-header-list">
                    <div className="libreria-header-list-left">
                        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/"><FontAwesomeIcon icon={faBookOpen} className="header-icon" /></NavLink></li>
                        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/catalogue">Catalogue</NavLink></li>
                    
                    </div>
                    <div className="libreria-header-list-left">

                        {isAuthenticated ? userLinks : guestLinks }
                    </div>

                </ul>
            </nav>
        </header>
    )
}

export default Header;
