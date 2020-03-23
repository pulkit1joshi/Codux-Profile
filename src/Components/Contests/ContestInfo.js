import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { HashRouter, Route } from 'react-router-dom'
import { Switch } from "react-router-dom";

import { fetchContests } from '../../actions/cfactions'
import { Link } from 'react-router-dom'
import Upcoming from './Upcoming'
import Div1 from './Type/Div1.js';
import Div2 from './Type/Div2.js';
import Div3 from './Type/Div3.js';
import Global from './Type/global';
import  CFLIST  from './Format/Cf';
import  Ioilist  from './Format/Ioi';
import  Icpclist  from './Format/Icpc';
import Home from './Home';

export class ContestInfo extends Component {
    componentDidMount() {
        if(this.props.fetched === 0) this.props.fetchContests();
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
                            <li className="nav-item dropdown">
                                <Link to={'#'} className="nav-link dropdown-toggle" data-toggle="dropdown">Format</Link>
                                <div class="dropdown-menu bg-light">
                                <Link to={`/contests/format/cf`} className="dropdown-item "> CF </Link>
                                <Link to={`/contests/format/ioi`} className="dropdown-item "> IOI</Link>
                                <Link to={`/contests/format/icpc`} className="dropdown-item "> ICPC </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <br/>

                    

                    <Switch> 
                        <Route path='/contests/' exact component={() => (<Home counts={this.props.counts} style={{margin: "auto"}}/>)  }>
                        </Route>
                        <Route path='/contests/upcoming/' exact component={Upcoming}></Route>
                        <Route path='/contests/div1/' exact component={Div1}></Route>
                        <Route path='/contests/div2/' exact component={Div2}></Route>
                        <Route path='/contests/div3/' exact component={Div3}></Route>
                        <Route path='/contests/global/' exact component={Global}></Route>
                        <Route path='/contests/format/cf/' exact component={CFLIST}></Route>
                        <Route path='/contests/format/ioi/' exact component={Ioilist}></Route>
                        <Route path='/contests/format/icpc/' exact component={Icpclist}></Route>
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
    fetched: state.contest.fetched,
    counts: state.contest.count
})

export default connect(mapStateToProps, { fetchContests })(ContestInfo)

