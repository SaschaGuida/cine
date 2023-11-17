import React, { useEffect, useState } from 'react';

interface NotificationProps {
    message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const localStorageNotification = localStorage.getItem('notification');

        if (localStorageNotification) {
            setIsVisible(true);
            return;
        }

        setIsVisible(false);

        const notificationTimeout = setTimeout(() => {
            setIsVisible(false);
            localStorage.removeItem('notification');
        }, 5000);

        localStorage.setItem('notification', message);

        return () => clearTimeout(notificationTimeout);
    }, [message]);

    return (
        <div style={{ display: isVisible ? 'block' : 'none', padding: '10px', background: '#f0f0f0', border: '1px solid #ccc' }}>
            {message}
        </div>
    );
};

export default Notification;
