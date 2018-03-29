import { combineReducers } from 'redux';

function shouldShowFormReducer(state = false, action) {
    if (action.type === 'TOGGLE_SHOULD_SHOW_FORM') {
        return !state;
    }
    if (action.type === 'ADD_WORD') {
        return false;
    }
    return state;
}

function filterStatusReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER') {
        return action.filterStatus;
    }
    return state;
}

function wordsReducer(state = [], action) {
    if (action.type === 'SET_WORDS') {
        return action.words;
    }
    if (action.type === 'ADD_WORD') {
        return [action.word, ...state];
    }
    if (action.type === 'REMOVE_WORD') {
        return state.filter(w => w._id !== action._id)
    }
    if (action.type === 'TOGGLE_WORD') {
        return state.map(w => {
            if (w._id !== action._id) return w;
            return { ...w, isMemorized: !w.isMemorized };
        });
    }
    return state;
}

export const reducer = combineReducers({
    words: wordsReducer,
    filterStatus: filterStatusReducer,
    shouldShowForm: shouldShowFormReducer
});
