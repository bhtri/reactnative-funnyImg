import { ACT_ADD_ACTION, ACT_REMOVE_ACTION } from './action';

const initState = {
    listData: []
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case ACT_ADD_ACTION:
            const item = state.listData.find((item) => item.id == action.payload.id);
            if (item) {
                state.listData = state.listData.map((item) => {
                    if (item.id === action.payload.id) {
                        item.status = action.payload.status;
                    }
                    return item;
                });
            } else {
                state.listData = [...state.listData, { id: action.payload.id, status: action.payload.status }];
            }
            break;
        case ACT_REMOVE_ACTION:
            state.listData = state.listData.filter((items) => items.id !== action.payload.id);
            break;
        default:
            break;
    }
    return state;
}