import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRatingHist } from '../../actions/userActions'
import PropTypes from 'prop-types'
import Nav from './SubComponents/nav'
//import Calendar from 'react-github-contribution-calendar';
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

                <div style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
                    <div class="card" >
                        <div class="card-header bg-info text-white d-flex justify-content-between">
                            <span>Summary</span>

                        </div>
                        <div>
                            <ul class="list-group list-group-flush" style={{ fontSize: "13px" }}>

                                {this.props.contestinf.map((datapoint, index) => (
                                    <a href=
                                        {`https://codeforces.com/contest/${datapoint.id}`}
                                    >
                                        <li class="list-group-item d-flex justify-content-between"> {datapoint.name}
                                            <span class="card" style={{ padding: "1px" }}> {datapoint.num} </span>
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ paddingTop: "1rem" }}>
                    <Graph data={this.getdata()} labels={this.getlabels()} />

                    <div style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
                        <div class="card" >
                            <div class="card-header bg-info text-white d-flex justify-content-between" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">Contests Participated</span>
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
    let maxrank = 0;
    let maxrankid = 0;
    let minrank = 10000000;
    let minrankid = 0;
    let maxinc = 0;
    let maxincid = 0;
    let maxdec = 0;
    let maxdecid = 0;
    if (state.user.ratinghist.length === 0) minrank = 0;
    for (let i = 0; i < state.user.ratinghist.length; i++) {
        if (state.user.ratinghist[i].rank > maxrank) {
            maxrank = state.user.ratinghist[i].rank;
            maxrankid = state.user.ratinghist[i].contestId;
        }
        if (state.user.ratinghist[i].rank < minrank) {
            minrank = state.user.ratinghist[i].rank;
            minrankid = state.user.ratinghist[i].contestId;
        }
        if (state.user.ratinghist[i].newRating - state.user.ratinghist[i].oldRating > maxinc) {
            maxinc = state.user.ratinghist[i].newRating - state.user.ratinghist[i].oldRating;
            maxincid = state.user.ratinghist[i].contestId;
        }
        if (state.user.ratinghist[i].newRating - state.user.ratinghist[i].oldRating < maxdec) {
            maxdec = state.user.ratinghist[i].newRating - state.user.ratinghist[i].oldRating;
            maxdecid = state.user.ratinghist[i].contestId;
        }
    }
    let contestinf = [];
    contestinf.push({
        name: "Contests",
        num: state.user.ratinghist.length,
        id: -1,
    })
    contestinf.push({
        name: "Maximum rank",
        num: maxrank,
        id: maxrankid,
    })
    contestinf.push({
        name: "Minimum rank",
        num: minrank,
        id: minrankid,
    })
    contestinf.push({
        name: "Maximum Increase",
        num: maxinc,
        id: maxincid,
    })
    contestinf.push({
        name: "Maximum Decrease",
        num: maxdec,
        id: maxdecid,
    })
    return {
        userexists: state.user.userExists,
        name: state.user.name,
        ratinghist: state.user.ratinghist,
        usersubmissions: state.user.usersubmissions,
        contestinf: contestinf,
    }
}

export default connect(mapStateToProps, { fetchRatingHist })(RatingHistory)
