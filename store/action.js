// Action Type
const ACT_ADD_DATA = 'ACT_ADD_DATA';

// Action Creator
function addListData() {
    return {
        type: ACT_ADD_DATA,
        payload: null,
    };
}

export {
    addListData
}