import React, { useState, useEffect, useRef }  from 'react';


let options = {
    label: 'The Color Red', 
}

const Dropdown = () => {
    return <h1>Dropdown {options.label}</h1>;
}

export default Dropdown;