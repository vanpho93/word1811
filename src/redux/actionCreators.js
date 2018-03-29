export function toggleWord(_id) {
    return { type: 'TOGGLE_WORD', _id };
}

export function removeWord(_id) {
    return { type: 'REMOVE_WORD', _id };
}

export function setWords(words) {
    return { type: 'SET_WORDS', words };
}

export function setFilterStatus(filterStatus) {
    return { type: 'SET_FILTER', filterStatus };
}

export function addWord(word) {
    return { type: 'ADD_WORD', word };
}

export function toggleShouldShowForm() {
    return { type: 'TOGGLE_SHOULD_SHOW_FORM' };
}
