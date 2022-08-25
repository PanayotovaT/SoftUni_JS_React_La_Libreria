import { useState, createContext, useContext } from 'react';

export const NotificationContext = createContext();

export const types = {
    error: 'danger',
    warn: 'warning',
    info: 'info',
    success: 'success'
}

export const initialNotification = {
    type: types.error,
    show: false,
    message: ''
}



export const NotificationProvider = ({children}) => {
    const [notification, setNotification] = useState(initialNotification);

    const hideNotification = () =>  setNotification(initialNotification);

    const showNotification = (message, type = types.error) => {
            setNotification({
                show:true,
                message,
                type
            });
            setTimeout(() => {
                setNotification(initialNotification);
            }, 4000);
    }

    return (
        <NotificationContext.Provider value={{notification, hideNotification, showNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationContext = () => useContext(NotificationContext);