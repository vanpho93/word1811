import axios from 'axios';

const URL = 'http://localhost:4000/word';

export function toggleWord(_id, isMemorized) {
    return dispatch => {
        axios.put(`${URL}/${_id}`, { isMemorized })
        .then(response => {
            const { success, error } = response.data;
            if (!success) return alert(error);
            dispatch({ type: 'TOGGLE_WORD', _id });
        });
    }
}

export function removeWord(_id) {
    return dispatch => {
        axios.delete(`${URL}/${_id}`)
        .then(response => {
            const { success, error } = response.data;
            if (!success) return alert(error);
            dispatch({ type: 'REMOVE_WORD', _id });
        });
    }
}

export function getAllWord() {
    return dispatch => {
        axios.get(URL)
        .then(response => {
            const { success, words, error } = response.data;
            if (!success) return alert(error);
            dispatch({ type: 'SET_WORDS', words });
        });
    }
}

export function addWord(en, vn) {
    return dispatch => {
        axios.post(URL, { en, vn })
        .then(response => {
            const { success, word, error } = response.data;
            if (!success) return alert(error);
            dispatch({ type: 'ADD_WORD', word });
        });
    }
}

export function setFilterStatus(filterStatus) {
    return { type: 'SET_FILTER', filterStatus };
}

export function toggleShouldShowForm() {
    return { type: 'TOGGLE_SHOULD_SHOW_FORM' };
}
