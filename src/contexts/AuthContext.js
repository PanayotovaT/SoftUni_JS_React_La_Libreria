import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialUser = {
    _id: '',
    email: '',
    accessToken: ''
}

export const AuthProvider  = ({children}) => {
    const [user, setUser] = useLocalStorage('user', initialUser);

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        setUser('user', initialUser);
    }

    return (
        <AuthContext.Provider value={{user, login, logout,isAuthenticated: Boolean(user._id)}}>
            {children}
        </AuthContext.Provider>
    )
}

export const  useAuthContext =() => useContext(AuthContext)