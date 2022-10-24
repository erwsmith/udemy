import React from 'react'; 

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // if user is holding command or ctrl key 
        if (event.metaKey || event.ctrlKey ) {
            // reloads the page clicked in a new tab
            return; 
        }

        event.preventDefault();
        window.history.pushState({}, '', href)

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href}>{children}</a>
};

export default Link;