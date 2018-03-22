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
      ],
      txtEn: 'a',
      txtVn: 'b'
    }
  }

  removeWord(_id) {
    const { words } = this.state;
    const newWords = words.filter(w => w._id !== _id);
    this.setState({ words: newWords });
  }

  toggleWord(_id) {
    const { words } = this.state;
    const newWords = words.map(w => {
      if (w._id !== _id) return w;
      return { ...w, isMemorized: !w.isMemorized };
    });
    this.setState({ words: newWords });
  }

  getWordItem(word) {
    return (
      <div className="word" key={word._id}>
        <div className="word-container">
          <h3 className="text-success">{word.en}</h3>
          <h3 className="text-danger">
            {word.isMemorized ? '------' : word.vn}
          </h3>
        </div>
        <div className="btn-container">
          <button
            className="btn btn-success"
            onClick={() => this.toggleWord(word._id)}
          >
            {word.isMemorized ? 'Forgot' : 'Memorized'}
          </button>
          <button
            className="btn btn-warning"
            onClick={() => this.removeWord(word._id)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  render() {
    const { txtEn, txtVn, words } = this.state;
    return (
      <div className="App container">
        <div className="form-group" style={{ width: '200px' }}>
          <input
            placeholder="English"
            className="form-control"
            value={txtEn}
            onChange={evt => this.setState({ txtEn: evt.target.value })}
          />
          <br />
          <input
            placeholder="Vietnamese"
            className="form-control"
            value={txtVn}
            onChange={evt => this.setState({ txtVn: evt.target.value })}
          />
          <br />
          <div className="btn-container">
            <button className="btn btn-success">
              Add word
            </button>
            <button className="btn btn-danger">
              Cancel
            </button>
          </div>
        </div>
        {words.map(word => this.getWordItem(word))}
      </div>
    );
  }
}

export default App;
