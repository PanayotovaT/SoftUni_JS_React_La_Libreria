import { createContext, useCallback, useContext, useState } from 'react';

export const types = {
    error: 'danger',
    info: 'info',
    warn: 'warning',
    success: 'success'
}

const initialNotification =  { 
    show: false, 
    message: '', 
    type: types.error
}

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(initialNotification);

    const showNotification = useCallback( (message, type = types.error) => {
        setNotification({show: true, message, type});

        setTimeout(() => {
            setNotification(initialNotification)
        }, 5000);

    }, []);

    const hideNotification = useCallback(() => {
        setNotification(initialNotification)
    }, [])


    return (
        <NotificationContext.Provider value={{notification, showNotification, hideNotification}}>
            {children}
        </NotificationContext.Provider>
    );
}

export const useNotificationContext = () => useContext(NotificationContext);


