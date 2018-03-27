import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordComponent extends Component {
    render() {
        const { word, dispatch } = this.props;
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
                    onClick={() => dispatch({ type: 'TOGGLE_WORD', _id: word._id })}
                >
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => dispatch({ type: 'REMOVE_WORD', _id: word._id})}
                >
                    Remove
                </button>
                </div>
            </div>
        );
    }
}

export const Word = connect()(WordComponent);
