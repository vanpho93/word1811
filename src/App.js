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
      txtEn: '',
      txtVn: '',
      shouldShowForm: false
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

  getForm() {
    const { txtEn, txtVn, shouldShowForm } = this.state;
    if (!shouldShowForm) return (
      <button className="btn btn-success" onClick={() => this.setState({ shouldShowForm: true })}>
        Create new word
      </button>
    );
    return (
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
          <button className="btn btn-success" onClick={() => this.addWord()}>
            Add word
          </button>
          <button className="btn btn-danger"  onClick={() => this.setState({ shouldShowForm: false })}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
  addWord() {
    const { txtEn, txtVn, words } = this.state;
    const word = {
      _id: Math.random() + '',
      en: txtEn,
      vn: txtVn,
      isMemorized: false
    };
    const newWords = [word, ...words];
    this.setState({ words: newWords, txtEn: '', txtVn: '', shouldShowForm: false });
  }

  render() {
    const { txtEn, txtVn, words } = this.state;
    return (
      <div className="App container">
        { this.getForm() }
        {words.map(word => this.getWordItem(word))}
      </div>
    );
  }
}

export default App;
