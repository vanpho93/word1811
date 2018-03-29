export function toggleWord(_id) {
    return { type: 'TOGGLE_WORD', _id };
}

export function removeWord(_id) {
    return { type: 'REMOVE_WORD', _id };
}
