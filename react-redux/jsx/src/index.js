// 5 step process to show something on the screen:

// 1) Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
    // Basic building blocks:
    // const date = new Date();
    // const time = date.toLocaleTimeString();
    // return <h1>{time}</h1>;
    // Same as 3 lines above:
    // return <h1>{new Date().toLocaleTimeString()}</h1>;
    // const name = 'Eric';
    // const age = '38'
    // return (
    //     <div>
    //         Hi, my name is {name} and my age is {age}
    //     </div>
    // )
    // strings go in ""
    // numbers go in {}
    // return <input type="number" min={5} max={10} />;
    // alternative way to define props
    // const inputType = "number";
    // const minValue = 5;
    // const message = 'Enter age';
    // return (
    //     <input 
    //     style={{ border: '3px solid red' }}
    //     type={inputType}
    //     min={minValue}
    //     max={10}
    //     list={[1,2,3]}
    //     alt={message}
    //     />
    // );

    // 5 Rules for converting HTML to JSX: 
    // ------------------------------------
    // 1. All prop names follow camelCase (e.g. maxLength, autoFocus)
    // 2. Number attributes use curly braces
    // 3. Boolean true can be written with just the prop name. False should be
    // written with curly braces (e.g. <input spellCheck /> ... spellCheck = {false})
    // 4. The class attribute is 'className'
    // 5. In-line styles are provided as objects

    // Examples
    // return <textarea autoFocus={true} />;
    // return <input spellCheck maxLength={8} />;
    // return <input style={{ border: '3px solid red', paddingTop: '5px', marginBottom: '5px'}} />;
    // return ( 
    //     <input placeholder="hi there" />
    // );


}

// 5) Show the component on the screen
root.render(<App />);