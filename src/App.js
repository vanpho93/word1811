import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div>
          <div className="word">
          <div className="word-container">
            <h3 className="text-success">one</h3>
            <h3 className="text-danger">một</h3>
          </div>
            <div className="btn-container">
              <button className="btn btn-success">Forgot</button>
              <button className="btn btn-warning">Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
