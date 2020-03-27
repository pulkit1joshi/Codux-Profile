import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";

import Form from './SubComponents/forms'
import UserInfo from './UserInfo'
import RatingHistory from './RatingHistory'
import UserSubmissions from './UserSubmissions'

class Users extends Component {

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
                  <Route path='/user/' exact component={Form}></Route>
                  <Route path='/user/:username/info' exact component={UserInfo}></Route>
                  <Route path='/user/:username/ratinghistory' exact component={RatingHistory}></Route>
                  <Route path='/user/:username/submissions' exact component={UserSubmissions}></Route>
                </Switch>
              </div>

            </div>

          </div>
        </HashRouter>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({
  userexists: state.user.userExists,
  name: state.user.name,
  info: state.user.info,
  ratinghist: state.user.ratinghist,
  usersubmissions: state.user.usersubmissions
})

export default connect(mapStateToProps, null)(Users);