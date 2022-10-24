import React, { useState, useEffect, useRef }  from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
                // you can use contains() on any DOM element to check for its children
                if (ref.current.contains(event.target)) {
                    return;
                }
                setOpen(false);
            };

        // DOM event listeners get called before React event listeners
        document.body.addEventListener("click", onBodyClick);

        // cleanup - remove event listener 
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
      }, []); // only run on initial render

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div 
                key={option.value} 
                className='item'
                onClick={() => {
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div 
                    onClick={() => {
                        setOpen(!open);
                    }} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
