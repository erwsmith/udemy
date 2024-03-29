import "semantic-ui-css/semantic.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './style/App.css'

// Class based component: 
class App extends React.Component {
  // CONSTRUCTOR (essentially)
  state = { lat: null, errorMessage: '' };

  // LIFECYCLE METHODS
  // If component successfully was rendered to screen
  // Perfect location to load data for component
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // If component was updated, load data here as required
  componentDidUpdate() {
    console.log('My component was updated!')
  }

  // Cleanup on component
  componentWillUnmount() {}


  // Code for conditional rendering, better here than in actual render function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept location request" />
  }

  // RENDER
  // Minimize code inside render function, it gets called a lot, just return JSX
  render () {
    return (
      <div className="main-index-div">
        {this.renderContent()}
      </div>

    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);