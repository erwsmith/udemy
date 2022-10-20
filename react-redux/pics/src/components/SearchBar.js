import React from 'react';

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    // onInputClick() {
    //     console.log('Input was clicked');
    // }
    // and put this prop in the input: onClick={this.onInputClick} 

    // Common user interaction callback functions: 
    // onClick(), onChange(), onSubmit() ...

    // Creation of a controlled element
    state = { term: ""};

    // Do this as an arrow function to avoid common 'undefined' error
    onFormSubmit = event => {
        // Stop browser from default behavior (reloading)
        event.preventDefault(); 
        console.log(this.state.term);
    }

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;