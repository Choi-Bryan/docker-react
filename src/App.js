import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" height="200px" />
        <p className="App-intro">Hi there!</p>
      </div>
    );
  }
}

export default App;
