import React, { useState, useEffect }  from 'react';
import axios from 'axios';


const Search  = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        
    }, [term]);
    // second argument in useEffect controls when it runs
    // [] runs only at initial render
    // ... nothing... runs at initial render and after every rerender
    // [data] runs at initial render, and after ever rerender if data has changed

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className='input' 
                    /> 
                </div>
            </div>
        </div>
    );
}

export default Search;