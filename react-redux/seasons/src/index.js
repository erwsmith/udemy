import React from 'react';
import ReactDOM from 'react-dom/client';

// Class based component: 
class App extends React.Component {
  // Gets called when a new instance of the object is created
  // This is the place for one-time setup
  // Best practice is to avoid data loading here
  constructor(props) {
    super(props);
    // This is the only time we do direct assigment to this.state: 
    this.state = { lat: null, errorMessage: '' };
  }

  // If component successfully was rendered to screen
  // Perfect location to load data for component
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Callback function
      position => {
        // The only way to update state is  setState()
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // If component was updated, load data here as required
  componentDidUpdate() {
    console.log('My component was updated!')
  }

  // Cleanup on component
  componentWillUnmount() {

  }

  // Minimize code inside render function, it gets called a lot, just return JSX
  render () {
    // Conditional rendering
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