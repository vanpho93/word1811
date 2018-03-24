import React, { Component } from 'react';

export class WordFilter extends Component {
    render() {
        const { filterStatus, onSetFilterStatus } = this.props;
        return (
            <select
                class="form-control" style={{ width: '200px' }}
                value={filterStatus}
                onChange={evt => onSetFilterStatus(evt.target.value)}
            >
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
            </select>
        );
    }
}
