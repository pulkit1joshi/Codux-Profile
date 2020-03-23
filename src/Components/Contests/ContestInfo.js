import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { HashRouter, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";

import { fetchContests } from '../../actions/cfactions'
import { Link } from 'react-router-dom'
import Upcoming from './Upcoming'
import Div1 from './Div1.js';
import Div2 from './Div2.js';
import Div3 from './Div3.js';
import Global from './global';

export class ContestInfo extends Component {
    componentDidMount() {
        if(this.props.fetched === 0) this.props.fetchContests();
        console.log("ContestInfo");
    }
    render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-center nav-tabs">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to={`/contests/`} className="nav-link"> {"<"} </Link>
                            </li>
                            <li className="nav-item">
                            <Link to={`/contests/upcoming/`} className="nav-link"> Upcoming </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={'#'} className="nav-link dropdown-toggle" data-toggle="dropdown">Type</Link>
                                <div class="dropdown-menu bg-light">
                                <Link to={`/contests/div1`} className="dropdown-item "> Div 1 </Link>
                                <Link to={`/contests/div2`} className="dropdown-item "> Div 2 </Link>
                                <Link to={`/contests/div3`} className="dropdown-item "> Div 3 </Link>
                                <Link to={`/contests/global`} className="dropdown-item "> Global </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path='/contests/upcoming/' exact component={Upcoming}></Route>
                        <Route path='/contests/div1/' exact component={Div1}></Route>
                        <Route path='/contests/div2/' exact component={Div2}></Route>
                        <Route path='/contests/div3/' exact component={Div3}></Route>
                        <Route path='/contests/global/' exact component={Global}></Route>
                    </Switch>

                </HashRouter>
            </React.Fragment>
        )
    }
}

ContestInfo.propTypes = {
    fetchContests: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    fetched: state.contest.fetched
})

export default connect(mapStateToProps, { fetchContests })(ContestInfo)

