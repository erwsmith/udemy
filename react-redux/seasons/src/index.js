import React from 'react';
import ReactDOM from 'react-dom/client';

// Class based component: 
class App extends React.Component {
  // gets called when a new instance of the object is created
  constructor(props) {
    super(props);
    // this is the only time we do direct assigment to this.state: 
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      // callback function
      position => {
        // the only way to update state is  setState()
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // minimize code inside render function, it gets called a lot
  render () {
    // conditional rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div> 
    }
    return <div>Loading...</div>
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);