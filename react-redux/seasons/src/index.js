import React from 'react';
import ReactDOM from 'react-dom/client';

// Class based component: 
class App extends React.Component {
  // gets called when a new instance of the object is created
  constructor(props) {
    super(props);
    // this is the only time we do direct assigment to this.state: 
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // the only way to update state is  setState()
        this.setState({ lat: position.coords.latitude })
      }, 
      (err) => console.log(err)
    );
  }

  // minimize code inside render function, it gets called a lot
  render () {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);