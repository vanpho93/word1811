import React, { Component } from 'react';
import logo from './logo.svg';

import { Word } from './Word';
import { WordForm } from './WordForm';
import { WordFilter } from './WordFilter';

import './App.css';

class App extends Component {
  getListWords() {
    const { words, filterStatus } = this.state;
    const filteredWords = words.filter(word => {
      if (filterStatus === 'SHOW_ALL') return true;
      if (filterStatus === 'SHOW_MEMORIZED') return word.isMemorized;
      return !word.isMemorized;
    });
    return filteredWords.map(word => (
      <Word
        word={word}
        onRemoveWord={this.onRemoveWord}
        onToggleWord={this.onToggleWord}
        key={word._id}
      />
    ));
  }

  render() {
    const { shouldShowForm, filterStatus } = this.state;
    return (
      <div className="App container">
        <WordForm />
        <br />
        <br />
        <WordFilter />
        { this.getListWords() }
      </div>
    );
  }
}

export default App;
