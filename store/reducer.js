import { ACT_ADD_ACTION, ACT_REMOVE_ACTION } from './action';

const initState = {
    listData: []
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case ACT_ADD_ACTION:
            state.listData = [...state.listData, { id: action.payload.id, status: action.payload.status }];
            break;
        case ACT_REMOVE_ACTION:
            console.log('REMOVE ACTION');
            break;
        default:
            break;
    }
    return state;
}