import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import './Header.css';
const Header = () => {
    const activeClass = ({ isActive }) => {
       return isActive ? 'active-link libreria-header-list-link' : 'libreria-header-list-link';
    }
    return (
        <header className="libreria-header">
            <nav className="libreria-header-nav">
                <ul className="libreria-header-list">
                    <div className="libreria-header-list-left">
                        <li className="libreria-header-list-item"><FontAwesomeIcon icon={faBookOpen} className="header-icon" ><NavLink className={activeClass} to="/"/ ></FontAwesomeIcon></li>
                        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/catalogue">Catalogue</NavLink></li>
                    </div>
                    <div className="libreria-header-list-left">
                        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/create">Create</NavLink></li>
                        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/my-profile">My Profile</NavLink></li>
                        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/login">Login</NavLink></li>
                        <li className="libreria-header-list-item"><NavLink className={activeClass} to="/register">Register</NavLink></li>
                        <li className="libreria-header-list-item"><NavLink className="libreria-header-list-link" to="/logout">Logout</NavLink></li>
                    </div>

                </ul>
            </nav>
        </header>
    )
}

export default Header;
