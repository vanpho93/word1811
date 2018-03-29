import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleWord, removeWord } from './redux/actionCreators';

class WordComponent extends Component {
    render() {
        const { word, toggleWord, removeWord } = this.props;
        return (
            <div className="word">
                <div className="word-container">
                <h3 className="text-success">{word.en}</h3>
                <h3 className="text-danger">
                    {word.isMemorized ? '------' : word.vn}
                </h3>
                </div>
                <div className="btn-container">
                <button
                    className="btn btn-success"
                    onClick={() => toggleWord(word._id, !word.isMemorized)}
                >
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => removeWord(word._id)}
                >
                    Remove
                </button>
                </div>
            </div>
        );
    }
}

export const Word = connect(null, { toggleWord, removeWord })(WordComponent);
