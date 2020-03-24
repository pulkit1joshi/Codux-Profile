import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";
import Users from './Users/Users'

import ContestInfo from './Contests/ContestInfo'
//import { Link } from 'react-router-dom'

/* Available data :

1. this.props.name
2. this.props.info
-------------------Data structure for info -----------------------------------------



{
      contribution: -1,
      lastOnlineTimeSeconds: 1,
      rating: ,
      friendOfCount: 0,
      titlePhoto: '//userpic.codeforces.com/no-title.jpg',
      rank: '',
      handle: '-e',
      maxRating: ,
      avatar: '//userpic.codeforces.com/no-avatar.jpg',
      registrationTimeSeconds: 1571594608,
      maxRank: ''
},

    

3. this.props.ratinghist

------------------- Data structure for ratinghist --------------------------------- ratinghist is array so each array element is as shown

ratinghist: [
      {
        contestId: 1,
        contestName: '',
        handle: 'name of the user',
        rank: his rank,
        ratingUpdateTimeSeconds: 1571936700,
        oldRating: rating old,
        newRating: rating new,
      },
	]

4. this.props.usersubmissions

------ It have the following data -------- Make sure this.props.usersubmissions[i] exists before checking out this.props.usersubmissions[i].id or contestId

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

*/

class Main extends Component {

  chartRef = React.createRef();

  render() {
    return (
      <React.Fragment>
      <HashRouter>
        <div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <Switch> 
            <Route path='/contests/' component={ContestInfo}></Route>   
            <Route path='/user/' component={Users}></Route>   
            </Switch>
          </div>
        </div>
        </div>
      </HashRouter>
    </React.Fragment>
    )
  }
}

export default connect(null, null)(Main);