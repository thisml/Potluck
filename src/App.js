import React, { Component } from 'react';
import potluck from './potluck.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={potluck} className="App-logo" alt="logo" />
          <p>
            The Potluck is coming!
          </p>
          <a
            className="App-link"
            href="https://goo.gl/forms/JRihdkBhYWI24kum2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up to get notified when we launch!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
