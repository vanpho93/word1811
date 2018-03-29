import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';

export class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { txtEn, txtVn } = this.state;
        const word = {
            _id: Math.random() + '',
            en: txtEn,
            vn: txtVn,
            isMemorized: false
        };
        this.props.addWord(word);
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { shouldShowForm, toggleShouldShowForm } = this.props;
        const { txtEn, txtVn } = this.state;
        if (!shouldShowForm) return (
            <button
                className="btn btn-success"
                onClick={toggleShouldShowForm}
            >
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
                    <button
                        className="btn btn-success"
                        onClick={this.addWord}
                    >
                        Add word
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={toggleShouldShowForm}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}

const mapState = state => ({
    shouldShowForm: state.shouldShowForm
});
export const WordForm = connect(mapState, actionCreators)(WordFormComponent);
