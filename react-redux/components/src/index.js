import React from 'react';
import { createRoot } from 'react-dom/client';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Eric" avatarImage = {faker.image.image()} timeAgo="Today at 4:00PM" comment="My comment" />
            <CommentDetail author="Alex" avatarImage = {faker.image.image()} timeAgo="Today at 2:15AM" comment="Great post here" />
            <CommentDetail author="Jane" avatarImage = {faker.image.image()} timeAgo="Yesterday at 5:30AM" comment="Hello, name is Jane" />
        </div> 
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />); 