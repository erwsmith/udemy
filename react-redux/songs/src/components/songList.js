import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render () {
        // this.props === { songs: state.songs }
        return <div>SongList</div>
    }
}

// Conventional name for this function is mapStateToProps
// Get all data from redux store (state)
const mapStateToProps = state => {
    return { songs: state.songs };
}

// Call function that is nested in another function with ()()
export default connect(mapStateToProps)(SongList);