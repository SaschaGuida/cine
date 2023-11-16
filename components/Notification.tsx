import React, { useEffect, useState } from 'react';

interface NotificationProps {
    message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
    const notificationTimeout = setTimeout(() => {
        setIsVisible(false);
    }, 5000);

    return () => clearTimeout(notificationTimeout);
    }, []);

    return (
        <div style={{ display: isVisible ? 'block' : 'none', padding: '10px', background: '#f0f0f0', border: '1px solid #ccc' }}>
            {message}
        </div>
    );
};

export default Notification;
