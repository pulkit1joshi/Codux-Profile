import { FETCH_USER, FETCH_RATINGHIST, FETCH_USUBMISSIONS } from '../actions/types';

const initialState = {
  userExists: 0,
  name: '',
  info: {
    contribution: '',
    lastOnlineTimeSeconds: '',
    rating: '',
    friendOfCount: '',
    titlePhoto: '',
    rank: '',
    handle: '-e',
    maxRating: '',
    avatar: '',
    registrationTimeSeconds: '',
    maxRank: ''
  },
  tags: [],
  verdicts: [],
  problemsbytags: [],
  byverdict: [],
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


export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case FETCH_USER:
      if (action.payload.result) {
        return {
          ...state,
          name: action.payload.result[0].handle,
          info: action.payload.result[0],
          userExists: action.userExists
        };
      }
      else {
        return {
          ...state,
          name: 'User_Not_Found',
          //info: initialState.info,
          userExists: action.userExists
        };
      }
    case FETCH_RATINGHIST:
      {
        return {
          ...state,
          ratinghist: action.payload.result,
          name: action.name
        };
      }
    case FETCH_USUBMISSIONS:
      {
        console.log("Submissions");
        console.log(action.verdict);
        return {
          ...state,
          usersubmissions: action.payload.result,
          problemsbytags: action.problemsbytags,
          tags: action.tags,
          verdicts: action.verdicts,
          byverdict: action.byverdict,
          name: action.name
        };
      }
  }
}