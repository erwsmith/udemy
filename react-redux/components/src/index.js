import React from 'react';
import { createRoot } from 'react-dom/client';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
import './style/App.css';

const App = () => {
    return (
        <div className="ui container comments">
            <h1>Comment Site</h1>
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this? 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Eric" 
                    avatar = {faker.image.image()} 
                    timeAgo="Today at 4:00PM" 
                    content="My comment" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    avatar = {faker.image.image()} 
                    timeAgo="Today at 2:15AM" 
                    content="Great post here" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    avatar = {faker.image.image()} 
                    timeAgo="Yesterday at 5:30AM" 
                    content="Hello, name is Jane" 
                />
            </ApprovalCard>
        </div> 
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);