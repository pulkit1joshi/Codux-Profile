import { FETCH_CONTESTS } from '../actions/types';

const initialstate = {
    contestlist: [],
    upcominglist: [],
    div1list: [],
    div2list: [],
    div3list: [],
    globallist: [],
    cflist: [],
    icpclist: [],
    ioilist: [],
    fetched: 0,
    count: {
        div1: 0,
        div2: 0,
        div3: 0,
        ioi:0,
        icpc: 0,
        cf: 0,
        global: 0,
        upcoming: 0,
        total: 0,
    }
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
                cflist: action.cflist,
                icpclist: action.icpclist,
                ioilist: action.ioilist,
                fetched: 1,
                count: action.count,
            };
    }
}