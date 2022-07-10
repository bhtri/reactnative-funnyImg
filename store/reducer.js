import { ACT_ADD_ACTION, ACT_REMOVE_ACTION } from './action';

const initState = {
    listData: []
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case ACT_ADD_ACTION:
            console.log('ADD ACTION');
            break;
        case ACT_REMOVE_ACTION:
            console.log('REMOVE ACTION');
            break;
        default:
            break;
    }
    return state;
}