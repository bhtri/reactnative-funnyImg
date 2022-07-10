// Action Type
const ACT_ADD_ACTION = 'ACT_ADD_ACTION';
const ACT_REMOVE_ACTION = 'ACT_REMOVE_ACTION';

// Action Creator
function addAction() {
    return {
        type: ACT_ADD_ACTION,
        payload: null,
    };
}

function removeAction() {
    return {
        type: ACT_REMOVE_ACTION,
        payload: null,
    };
}

export {
    ACT_ADD_ACTION,
    ACT_REMOVE_ACTION,
    addAction,
    removeAction,
}