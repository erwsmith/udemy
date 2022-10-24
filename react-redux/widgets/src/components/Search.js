import React, { useState, useEffect }  from 'react';
import axios from 'axios';


const Search  = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search', 
                    origin: '*', 
                    format: 'json',
                    srsearch: term
                },
            });
            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);
    
            // The only thing useEffect can return is another function
            return () => {
                clearTimeout(timeoutId);
            }
        }

        
    }, [term]);
    // The second argument in useEffect controls when it runs
    // [] runs only at initial render
    // ... nothing... runs at initial render and after every rerender
    // [data] runs at initial render, and after ever rerender if data has changed

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className='ui button'>Go
                    </a>
                </div> 
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    {/* This exposes the site to possible XSS attacks */}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div>
          <div className="ui form">
            <div className="field">
              <label>Enter Search Term</label>
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="input"
              />
            </div>
          </div>
          <div className='ui celled list'>
            {renderedResults}
          </div>
        </div>
    );
}

export default Search;