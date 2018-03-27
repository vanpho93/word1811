import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordFilterComponent extends Component {
    render() {
        const { filterStatus, dispatch } = this.props;
        return (
            <select
                className="form-control" style={{ width: '200px' }}
                value={filterStatus}
                onChange={evt => dispatch({ type: 'SET_FILTER', filterStatus: evt.target.value })}
            >
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
            </select>
        );
    }
}

const mapState = state => ({ filterStatus: state.filterStatus });

export const WordFilter = connect(mapState)(WordFilterComponent);
