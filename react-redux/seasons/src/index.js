import React from 'react';
import ReactDOM from 'react-dom/client';

// Class based component: 
class App extends React.Component {
  render () {
    window.navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => console.log(position), 
      // Failure callback
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);