import { FETCH_USER } from '../actions/types';

const initialState = {
    userExists: 0,
    name: '',
    info: {}
}


export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
        case FETCH_USER:
            console.log(action.payload);
            return {
                ...state,
                name: action.payload.result[0].handle,
                info: action.payload.result[0],
                userExists: action.userExists
            };
    }
}