import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList () {
        return this.props.songs.map((song) => {
            return (
                // classNames pulled from semantic ui
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button 
                            className='ui button primary'
                            onClick={() => this.props.selectSong(song)}
                        >
                          Select
                        </button>
                    </div>
                    <div className='content'>
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render () {
        // console.log(this.props)
        return <div className='ui divided list'>{this.renderList()}</div>
    }
}

// Conventional name for this function is mapStateToProps
// Get all data from redux store (state)
const mapStateToProps = state => {
    return { songs: state.songs };
}

// Call function that is nested in another function with ()()
// To call an Action Creater from a component, it needs to be passed
// to the connect like this: 
export default connect(mapStateToProps, { selectSong })(SongList);