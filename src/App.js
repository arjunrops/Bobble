import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import MockForm from './Components/MockForm/MockForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <MockForm />
      </div>
    );
  }
}

export default App;
