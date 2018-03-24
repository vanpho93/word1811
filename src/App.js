import React, { Component } from 'react';
import logo from './logo.svg';

import { Word } from './Word';
import { WordForm } from './WordForm';
import { WordFilter } from './WordFilter';

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
      shouldShowForm: false,
      filterStatus: 'SHOW_MEMORIZED' //SHOW_MEMORIZED SHOW_FORGOT
    };
    this.onRemoveWord = this.onRemoveWord.bind(this);
    this.onToggleWord = this.onToggleWord.bind(this);
    this.onToggleShouldShowForm = this.onToggleShouldShowForm.bind(this);
    this.onAddWord = this.onAddWord.bind(this);
    this.onSetFilterStatus = this.onSetFilterStatus.bind(this);
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

  onSetFilterStatus(filterStatus) {
    this.setState({ filterStatus });
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
        <WordForm
          shouldShowForm={shouldShowForm}
          onToggleShouldShowForm={this.onToggleShouldShowForm}  
          onAddWord={this.onAddWord}
        />
        <br />
        <br />
        <WordFilter
          filterStatus={filterStatus}
          onSetFilterStatus={this.onSetFilterStatus}
        />
        { this.getListWords() }
      </div>
    );
  }
}

export default App;
