import React, { Component } from 'react';

export class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
    }
    render() {
        const { shouldShowForm } = this.props;
        const { txtEn, txtVn } = this.state;
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
                    <button className="btn btn-success">
                        Add word
                    </button>
                    <button className="btn btn-danger">
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}
