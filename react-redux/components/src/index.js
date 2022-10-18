import React from 'react';
import { createRoot } from 'react-dom/client';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
        </div> 
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />); 