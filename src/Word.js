import React, { Component } from 'react';

export class Word extends Component {
    render() {
        const { word, onToggleWord, onRemoveWord } = this.props;
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
                    onClick={() => onToggleWord(word._id)}
                >
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => onRemoveWord(word._id)}
                >
                    Remove
                </button>
                </div>
            </div>
        );
    }
}