import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';

class WordFilterComponent extends Component {
    render() {
        const { filterStatus, setFilterStatus } = this.props;
        return (
            <select
                className="form-control" style={{ width: '200px' }}
                value={filterStatus}
                onChange={evt => setFilterStatus(evt.target.value)}
            >
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
            </select>
        );
    }
}

const mapState = state => ({ filterStatus: state.filterStatus });

export const WordFilter = connect(mapState, actionCreators)(WordFilterComponent);
