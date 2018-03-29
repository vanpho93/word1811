import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const defaultState = {
    words: [],
    shouldShowForm: false,
    filterStatus: 'SHOW_ALL' //SHOW_MEMORIZED SHOW_FORGOT
};

function reducer(state = defaultState, action) {
    if (action.type === 'TOGGLE_SHOULD_SHOW_FORM') {
        return { ...state, shouldShowForm: !state.shouldShowForm };
    }
    if (action.type === 'ADD_WORD') {
        return {
            ...state,
            words: [action.word, ...state.words],
            shouldShowForm: false
        };
    }
    if (action.type === 'SET_WORDS') {
        return { ...state, words: action.words };
    }
    if (action.type === 'REMOVE_WORD') {
        return {
            ...state,
            words: state.words.filter(w => w._id !== action._id)
        };
    }
    if (action.type === 'TOGGLE_WORD') {
        return {
            ...state,
            words: state.words.map(w => {
                if (w._id !== action._id) return w;
                return { ...w, isMemorized: !w.isMemorized };
            })
        };
    }
    if (action.type === 'SET_FILTER') {
        return {
            ...state,
            filterStatus: action.filterStatus
        };
    }
    return state;
}

export const store = createStore(reducer, applyMiddleware(thunk));
