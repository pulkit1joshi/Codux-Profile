
import { FETCH_CONTESTS } from './types';
import { contests } from './links';

export const fetchContests = () => dispatch => {
    console.log('Contestss Fetched');
    const url = contests;
    let cdata = [];
    fetch(url)
        .then(res => res.json())
        .then(contestsData => {
            cdata = contestsData;
            let upcom = [];
            let div1 = [];
            let div2 = [];
            let div3 = [];
            let cf = [];
            let ioi = [];
            let icpc = [];
            let global = [];
            cdata.result.map((contest, index) => {
                if (contest.phase === "BEFORE") {
                    upcom.push(contest);
                }
                if (contest.type === "CF") {
                    cf.push(contest);
                }
                else if (contest.type === "IOI") {
                    ioi.push(contest);
                }
                else if (contest.type === "ICPC") {
                    icpc.push(contest);
                }
                if (contest.name.includes("Div. 1")) {
                    div1.push(contest);
                }
                else if (contest.name.includes("Div. 2")) {
                    div2.push(contest);
                }
                else if (contest.name.includes("Div. 3")) {
                    div3.push(contest);
                }
                else {
                    global.push(contest);
                }
                return 0;
            })
            dispatch({
                type: FETCH_CONTESTS,
                payload: cdata.result,
                upcoming: upcom,
                div1list: div1,
                div2list: div2,
                div3list: div3,
                ioilist: ioi,
                icpclist: icpc,
                cflist: cf,
                globallist: global,
                count: {
                    div1: div1.length,
                    div2: div2.length,
                    div3: div3.length,
                    ioi: ioi.length,
                    icpc: icpc.length,
                    cf: cf.length,
                    global: global.length,
                    upcoming: upcom.length,
                    total: cdata.result.length,
                }
            })
        }
        );

}