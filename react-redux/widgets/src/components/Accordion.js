import React, { useState } from 'react';

const Accordion = ({ items }) => {
    // useState returns 2 elements
    // first element is the piece of state
    // second element is a function called to update piece of state
    // useState takes in one argument: the default value for our piece of state
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
    };

    const renderedItems = items.map((item, index) => {
        return (
            // instead of a div, return a fragment to avoid double border 
            <React.Fragment key={item.title}>
                <div 
                    className='title active'
                    onClick={() => onTitleClick(index)}
                    >
                    <i className='dropdown icon'></i>{item.title}
                </div>
                <div className='content active'>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });
    return (
        <div className='ui styled accordion'>
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    );
};

export default Accordion;