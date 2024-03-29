import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    // this state is just to get our route to update
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path 
    ? children 
    : null;
};

export default Route;