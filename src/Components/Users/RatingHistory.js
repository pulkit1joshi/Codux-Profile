import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRatingHist } from '../../actions/userActions'
import PropTypes from 'prop-types'
import Nav from './SubComponents/nav'

import Graph from '../SubComponents/Graph.js'


export class RatingHistory extends Component {

    componentDidMount() {
        const string2 = this.props.match.params.username;
        this.props.fetchRatingHist(string2);
    }

    getdata = () => {
        var data2 = [];
        this.props.ratinghist.map((datapoint, index) => {
            data2.push(datapoint.oldRating);
            return 0;
        });
        console.log(data2);
        return data2;
    }

    getlabels = () => {
        var data2 = [];
        this.props.ratinghist.map((datapoint, index) => {
            data2.push(index);
            return 0;
        });
        console.log(data2);
        return data2;
    }

    render() {
        return (
            <React.Fragment>

                <Nav name={this.props.name} />

                <div style={{ padding: "3rem" }}>
                    <Graph data={this.getdata()} labels={this.getlabels()} />

                    <div style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
                        <div class="card" >
                            <div class="card-header bg-info text-white d-flex justify-content-between" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">Contests</span>
                                <span type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                    +</span>
                            </div>
                            <ul class="list-group list-group-flush collapse" id="collapseExample2" style={{ fontSize: "13px" }}>

                                {this.props.ratinghist.map((datapoint, index) => (
                                    <a href=
                                        {`https://codeforces.com/contest/${datapoint.contestId}`}
                                    >
                                        <li class="list-group-item d-flex justify-content-between"> {datapoint.contestName}
                                            <span class="label" style={{ padding: "1px", paddingLeft: "10px" }}> {datapoint.rank} </span>
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </React.Fragment>
        )
    }
}

RatingHistory.propTypes = {
    fetchRatingHist: PropTypes.func.isRequired
};

const mapStateToProps = state => {


    return {
        userexists: state.user.userExists,
        name: state.user.name,
        ratinghist: state.user.ratinghist,

        usersubmissions: state.user.usersubmissions
    }
}

export default connect(mapStateToProps, { fetchRatingHist })(RatingHistory)
