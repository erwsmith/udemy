import React from 'react';
import PostList from './PostList';

const App = () => {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
                <PostList />
            </div>
            <div className="five wide column">
                App col1
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default App;