import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JavaScript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    }, 
    {
        title: 'Third Title',
        conent: 'Third content'
    }
]

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
};