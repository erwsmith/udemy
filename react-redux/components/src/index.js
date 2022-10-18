import React from 'react';
import { createRoot } from 'react-dom/client';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Eric" 
                avatar = {faker.image.image()} 
                timeAgo="Today at 4:00PM" 
                content="My comment" 
            />
            <CommentDetail 
                author="Alex" 
                avatar = {faker.image.image()} 
                timeAgo="Today at 2:15AM" 
                content="Great post here" 
            />
            <CommentDetail 
                author="Jane" 
                avatar = {faker.image.image()} 
                timeAgo="Yesterday at 5:30AM" 
                content="Hello, name is Jane" 
            />
        </div> 
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);