import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRatingHist } from '../actions/userActions'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import RatingItem from './SubComponents/ratingitem.js'
import Graph from './SubComponents/Graph.js'

export class RatingHistory extends Component {

    componentDidMount() {
        const string2 = this.props.match.params.username;
        this.props.fetchRatingHist(string2);
    }

    getdata=() => {
        var data2 = [];
        this.props.ratinghist.map((datapoint, index) => 
        {
            data2.push(datapoint.oldRating);
            return 0;
        });
        console.log(data2);
        return data2;
    }

    getlabels=() => {
        var data2 = [];
        this.props.ratinghist.map((datapoint, index) => 
        {
            data2.push(index);
            return 0;
        });
        console.log(data2);
        return data2;
    }

    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-sm bg-light navbar-light">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link to={`/user/${this.props.name}/info`} className="nav-link"> Basic </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={`/user/${this.props.name}/ratinghistory`} className="nav-link"> Rating History </Link>
                        </li>
                        <li class="nav-item">
                            <Link to={`/user/${this.props.name}/submissions`} className="nav-link"> Submissions </Link>
                        </li>
                    </ul>
                </nav>
                <Graph data={this.getdata()} labels={this.getlabels()} />
                {this.props.ratinghist.map((contest, index) => (
                    <RatingItem key={index} item={contest} num={index + 1} />
                ))}

            </React.Fragment>
        )
    }
}

RatingHistory.propTypes = {
    fetchRatingHist: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userexists: state.user.userExists,
    name: state.user.name,
    ratinghist: state.user.ratinghist,
    usersubmissions: state.user.usersubmissions
})

export default connect(mapStateToProps, { fetchRatingHist })(RatingHistory)
