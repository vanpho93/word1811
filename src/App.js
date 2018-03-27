import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Word } from './Word';
import { WordForm } from './WordForm';
import { WordFilter } from './WordFilter';

import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:4000/word')
    .then(response => {
      const { success, words, error } = response.data;
      if (!success) return alert(error);
      this.props.dispatch({ type: 'SET_WORDS', words });
    });
  }

  getListWords() {
    const { words, filterStatus } = this.props;
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
    const { shouldShowForm, filterStatus } = this.props;
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

const mapStateToProps = state => ({
  words: state.words,
  filterStatus: state.filterStatus
});

export default connect(mapStateToProps)(App);
