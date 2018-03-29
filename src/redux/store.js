import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers';

const defaultState = {
    words: [],
    shouldShowForm: false,
    filterStatus: 'SHOW_ALL' //SHOW_MEMORIZED SHOW_FORGOT
};

export const store = createStore(reducer, applyMiddleware(thunk));
