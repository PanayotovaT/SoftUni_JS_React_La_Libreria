import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authServices';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext'

import './Login.css';

const Login = () => {
    const navigate= useNavigate();
    const { login } = useAuthContext();
    const { showNotification } = useNotificationContext();

    const loginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {email, password} = Object.fromEntries(formData);

        authService.login({email, password})
            .then(data => {
                login(data);
                showNotification('You have logged in successfully!', types.success);
                navigate('/');
            }).catch(err => {
                console.log(err.message);
                return;
            })

    }

    return (
        <section className="libreria-login">
            <form className="libreria-login-form" method="POST" onSubmit={loginHandler}>
                <fieldset className="libreria-login-fieldset">
                    <legend>Sign In Form</legend>
                    <div className="login-form-div">
                        <label htmlFor="email" className="login-form-label">Email</label>
                        <input type="text" className="login-form-input" id="email" name="email" placeholder="mimi@abv.bg..."/>
                    </div>
                    <div className="login-form-div">
                        <label htmlFor="password" className="login-form-label">Password</label>
                        <input type="password" className="login-form-input" id="password" name="password" />
                    </div>
                    <div className="login-form-div">
                        <input type="submit" className="login-form-input login-btn" value="Sign In"/>
                    </div>
                </fieldset>
            </form>
        </section> 
    )
}

export default Login;