import { FETCH_USER, FETCH_RATINGHIST, FETCH_USUBMISSIONS } from '../actions/types';

const initialState = {
    userExists: 0,
    name: '',
    info: {},
    ratinghist: [],
    usersubmissions: [
        {
          "id": -1,
          "contestId": -1,
          "creationTimeSeconds": 0,
          "relativeTimeSeconds": 0,
          "problem": {
            "contestId": 0,
            "index": "1",
            "name": "",
            "type": "",
            "points": 1,
            "rating": 1,
            "tags": [
              "-",
              "-",
              "-"
            ]
          },
          "author": {
            "contestId": 1,
            "members": [
              {
                "handle": ""
              }
            ],
            "participantType": "PRACTICE",
            "ghost": false,
            "startTimeSeconds": 1
          },
          "programmingLanguage": "GNU C++14",
          "verdict": "OK",
          "testset": "TESTS",
          "passedTestCount": 66,
          "timeConsumedMillis": 296,
          "memoryConsumedBytes": 1638400
        }]
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
        case FETCH_RATINGHIST:
            {
                console.log(action.payload.result);
                return {
                    ...state,
                    ratinghist: action.payload.result
                };
            }
        case FETCH_USUBMISSIONS:
            {
                console.log("Submissions");
                console.log(action.payload.result);
                return {
                    ...state,
                    usersubmissions: action.payload.result
                };
            }
    }
}