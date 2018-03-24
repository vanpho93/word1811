import React, { Component } from 'react';
import logo from './logo.svg';

import { Word } from './Word';
import { WordForm } from './WordForm';

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
      shouldShowForm: false
    };
    this.onRemoveWord = this.onRemoveWord.bind(this);
    this.onToggleWord = this.onToggleWord.bind(this);
    this.onToggleShouldShowForm = this.onToggleShouldShowForm.bind(this);
    this.onAddWord = this.onAddWord.bind(this);
  }

  onRemoveWord(_id) {
    const { words } = this.state;
    const newWords = words.filter(w => w._id !== _id);
    this.setState({ words: newWords });
  }

  onToggleWord(_id) {
    const { words } = this.state;
    const newWords = words.map(w => {
      if (w._id !== _id) return w;
      return { ...w, isMemorized: !w.isMemorized };
    });
    this.setState({ words: newWords });
  }

  onToggleShouldShowForm() {
    // this.setState({ shouldShowForm: !this.state.shouldShowForm });
    this.setState(prevState => ({ shouldShowForm: !prevState.shouldShowForm  }));
  }

  onAddWord(txtEn, txtVn) {
    const { words } = this.state;
    const word = {
      _id: Math.random() + '',
      en: txtEn,
      vn: txtVn,
      isMemorized: false
    };
    const newWords = [word, ...words];
    this.setState({ words: newWords, shouldShowForm: false });
  }

  render() {
    const { words, shouldShowForm } = this.state;
    return (
      <div className="App container">
        <WordForm
          shouldShowForm={shouldShowForm}
          onToggleShouldShowForm={this.onToggleShouldShowForm}  
          onAddWord={this.onAddWord}
        />
        {words.map(word => (
          <Word
            word={word}
            onRemoveWord={this.onRemoveWord}
            onToggleWord={this.onToggleWord}
            key={word._id}
          />
        ))}
      </div>
    );
  }
}

export default App;
