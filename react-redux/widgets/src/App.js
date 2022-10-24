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
        title: 'Why is React useful for engineers?',
        content: 'React makes it simple to build websites and apps, create UI test cases, reuse existing codes on the website to its mobile counterpart, and improve the UI and performance of web applications. '
    }
]

export default () => {
    return (
        <div>
            <br />
            <Accordion items={items}/>
        </div>
    );
};