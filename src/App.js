import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        { _id: 'abc1', en: 'One', vn: 'Một', isMemorized: true },
        { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
        { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
        { _id: 'abc4', en: 'Four', vn: 'Bốn', isMemorized: true },
      ]
    }
  }

  getWordItem(word) {
    return (
      <div className="word" key={word._id}>
        <div className="word-container">
          <h3 className="text-success">{word.en}</h3>
          <h3 className="text-danger">{word.vn}</h3>
        </div>
        <div className="btn-container">
          <button className="btn btn-success">Forgot</button>
          <button className="btn btn-warning">Remove</button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="App container">
        { this.state.words.map(word => this.getWordItem(word)) }
      </div>
    );
  }
}

export default App;
