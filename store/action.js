// Action Type
const ACT_ADD_ACTION = 'ACT_ADD_ACTION';
const ACT_REMOVE_ACTION = 'ACT_REMOVE_ACTION';

// Action Creator
function addAction(id, status) {
    return {
        type: ACT_ADD_ACTION,
        payload: {
            id,
            status
        },
    };
}

function removeAction(id) {
    return {
        type: ACT_REMOVE_ACTION,
        payload: {
            id,
        },
    };
}

export {
    ACT_ADD_ACTION,
    ACT_REMOVE_ACTION,
    addAction,
    removeAction,
}