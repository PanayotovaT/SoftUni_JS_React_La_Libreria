import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authServices';
import { useAuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const { logout } = useAuthContext();

    useEffect(() => {

        authService.logout()
            .then(response => {
                logout();
                navigate('/')
            }).catch(err => {
                logout();
                return;
            })

    }, [logout, navigate]);


    return null;
}

export default Logout;