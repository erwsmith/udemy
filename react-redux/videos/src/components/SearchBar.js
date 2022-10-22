import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        // This tells the parent what the search term is
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div>
                <div className='ui segment search-bar'>
                    <form onSubmit={this.onFormSubmit} className='ui form'>
                        <div className='field'>
                            <label>Video Search</label>
                            <input 
                                type='text' 
                                onChange={this.onInputChange}
                                value={this.state.term}
                                />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar;