import { FETCH_CONTESTS } from '../actions/types';

const initialstate = {
    contestlist: [],
    upcominglist: [],
    div1list: [],
    div2list: [],
    div3list: [],
    globallist: [],
    fetched: 0,
}

export default function(state = initialstate,action) {
    switch(action.type)
    {
        default:
            return state;
        case FETCH_CONTESTS:
            console.log(action.div1list);
            return {
                ...state,
                contestlist: action.payload.result,
                upcominglist: action.upcoming,
                div1list: action.div1list,
                div2list: action.div2list,
                div3list: action.div3list,
                globallist: action.globallist,
                fetched: 1,
            };
    }
}