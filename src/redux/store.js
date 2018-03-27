import { createStore } from 'redux';

const defaultState = {
    words: [
        { _id: 'abc1', en: 'One', vn: 'Một', isMemorized: true },
        { _id: 'abc2', en: 'Two', vn: 'Hai', isMemorized: false },
        { _id: 'abc3', en: 'Three', vn: 'Ba', isMemorized: false },
        { _id: 'abc4', en: 'Four', vn: 'Bốn', isMemorized: true },
    ],
    shouldShowForm: false,
    filterStatus: 'SHOW_ALL' //SHOW_MEMORIZED SHOW_FORGOT
};

function reducer(state = defaultState, action) {
    if (action.type === 'TOGGLE_SHOULD_SHOW_FORM') {
        return { ...state, shouldShowForm: !state.shouldShowForm };
    }
    if (action.type === 'ADD_WORD') {
        return { ...state, words: [action.word, ...state.words] };
    }
    return state;
}

export const store = createStore(reducer);
