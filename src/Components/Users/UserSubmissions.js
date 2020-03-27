import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUSubmissions } from '../../actions/userActions'
import PropTypes from 'prop-types'
import Nav from './SubComponents/nav'
import HBar from '../SubComponents/HBar'
import Bar from '../SubComponents/Bar'
import PieChart from '../SubComponents/PieChart'
import List from './SubComponents/List'
//import ProblemItem from './SubComponents/problemitem'

export class UserSubmissions extends Component {

    componentDidMount() {
        const string3 = this.props.match.params.username;
        if (string3)
            this.props.fetchUSubmissions(string3);
        else this.props.fetchUSubmissions(this.props.name);
    }
    render() {
        let color = ["#e74c3c",
            "#2ecc71",
            "#f1c40f",
            "#34495e",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
        ]
        return (
            <React.Fragment>
                <Nav />
                <div style={{ paddingTop: "3rem" }} >


                    <List heading="Submissions" data={this.props.verdictinfo} />


                    <div className="card" style={{ marginTop: "3rem" }}>
                        <div class="card-header bg-info text-white">
                            Question type analysis
                    </div>
                        <div class="card-body">
                            <HBar tags={this.props.tags} data={this.props.problems} />
                        </div>
                    </div>



                    <div className="card" style={{ marginTop: "3rem" }}>
                        <div class="card-header bg-info text-white">
                            Verdict Analysis
                    </div>
                        <div class="card-body">

                            <PieChart tags={this.props.verdicts} data={this.props.verdictcount} color={color} />
                        </div>
                    </div>

                    <List heading="Problems Summary" data={this.props.problemsinfo} />

                    <div className="card" style={{ marginTop: "3rem" }}>
                        <div class="card-header bg-info text-white">
                            AC analysis
                    </div>
                        <div class="card-body">
                            <Bar tags={this.props.qbyindexlist} data={this.props.qbyindex} />
                        </div>
                    </div>

                    <div style={{ paddingTop: "3rem" }}>
                        <div class="card" >
                            <div class="card-header bg-info text-white d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Unsolved List</span>
                                <span type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    +</span>
                            </div>
                            <div class="collapse" id="collapseExample">
                                <ul class="list-group list-group-flush" style={{ fontSize: "13px" }}>

                                    {this.props.unsolved.map((datapoint, index) => (
                                        <a href=
                                            {`https://codeforces.com/contest/${datapoint.contestId}/problem/${datapoint.index}`}
                                        >
                                            <li class="list-group-item d-flex justify-content-between"> {datapoint.name}
                                                <span class="card" style={{ padding: "1px" }}> {datapoint.contestId}-{datapoint.index} </span>
                                            </li>
                                        </a>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                        <div class="card" >
                            <div class="card-header bg-info text-white d-flex justify-content-between" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <span type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">Solved List</span>
                                <span type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                    +</span>
                            </div>
                            <div class="collapse" id="collapseExample2">
                                <ul class="list-group list-group-flush" style={{ fontSize: "13px" }}>

                                    {this.props.solved.map((datapoint, index) => (
                                        <a href=
                                            {`https://codeforces.com/contest/${datapoint.contestId}/problem/${datapoint.index}`}
                                        >
                                            <li class="list-group-item d-flex justify-content-between"> {datapoint.name}
                                                <span class="card" style={{ padding: "1px" }}> {datapoint.contestId}-{datapoint.index} </span>
                                            </li>
                                        </a>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment >
        )
    }
}

UserSubmissions.propTypes = {
    fetchUSubmissions: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    let data2 = [];
    state.user.verdicts.map((tag, index) => {
        data2.push(state.user.byverdict[tag].length)
        return 0;
    })
    let submissioninfo = [];
    let data = {
        name: "",
        num: 0,
    };
    data.name = "Total Submissions";
    data.num = state.user.usersubmissions.length;
    submissioninfo.push(data);
    let data3 = {
        name: "",
        num: 0,
    };
    data3.name = "Successfull Submissions";
    data3.num = data2[1];
    submissioninfo.push(data3);

    submissioninfo.push({
        name: "Unsuccessfull Submissions",
        num: data.num - data3.num,
    })

    submissioninfo.push({
        name: "Average Attempts",
        num: data.num / data3.num,
    })
    let problems = new Set();
    let uniqueprob = [];
    state.user.usersubmissions.map((question, index) => {
        if (!problems.has(question.problem.name)) {
            uniqueprob.push(question.problem);
        }
        problems.add(question.problem.name);
        return 0;
    })




    let countok = [];
    let countwa = [];
    let countot = [];
    let sumok = 0;
    let sumwa = 0;
    let sumot = 0;
    let maxrating = 0;
    let minrating = 10000000;
    let unsolved = [];

    let qbyindex = [];
    let solved = [];

    for (let i = 0; i < state.user.usersubmissions.length; i++) {
        if (state.user.usersubmissions[i].verdict === 'OK') {
            if (state.user.usersubmissions[i].problem.rating > maxrating) maxrating = state.user.usersubmissions[i].problem.rating;
            if (state.user.usersubmissions[i].problem.rating)
                sumok += state.user.usersubmissions[i].problem.rating;
            countok.push(state.user.usersubmissions[i].problem.rating);
            qbyindex[state.user.usersubmissions[i].problem.index[0]] = qbyindex[state.user.usersubmissions[i].problem.index[0]] + 1 || 1;
            if (solved.some(e => e.name === state.user.usersubmissions[i].problem.name)) {
                /* vendors contains the element we're looking for */
                //console.log("YE");
                continue;

            }
            solved.push(state.user.usersubmissions[i].problem.name);

        }
        else if (state.user.usersubmissions[i].verdict === "WRONG_ANSWER") {
            if (state.user.usersubmissions[i].problem.rating < minrating) minrating = state.user.usersubmissions[i].problem.rating;
            if (state.user.usersubmissions[i].problem.rating)
                sumwa += state.user.usersubmissions[i].problem.rating;
            countwa.push(state.user.usersubmissions[i].problem.rating);
        }
        else {
            if (state.user.usersubmissions[i].problem.rating < minrating) minrating = state.user.usersubmissions[i].problem.rating;
            if (state.user.usersubmissions[i].problem.rating)
                sumot += state.user.usersubmissions[i].problem.rating;
            countot.push(state.user.usersubmissions[i].problem.rating);

        }
    }
    let solvedlist = [];
    for (let i = 0; i < uniqueprob.length; i++) {
        if (!solved.includes(uniqueprob[i].name)) {
            unsolved.push(uniqueprob[i]);
            console.log(uniqueprob[i]);
        }
        else {
            solvedlist.push(uniqueprob[i]);
        }
    }
    let qbyindexlist = Object.keys(qbyindex);
    let sumtotal = sumok + sumwa + sumot;
    if (countok.length + countwa.length + countot.length > 0)
        sumtotal /= (countok.length + countwa.length + countot.length);
    if (countok.length > 0)
        sumok /= countok.length;
    if (countwa.length > 0)
        sumwa /= countwa.length;
    if (countot.length > 0)
        sumot /= countot.length;

    let problemsinfo = [];
    problemsinfo.push({
        name: "Attempted",
        num: uniqueprob.length,
    });
    problemsinfo.push({
        name: "Solved",
        num: data2[1],
    })

    problemsinfo.push({
        name: "Average Difficulty",
        num: Math.round(sumtotal),
    })

    problemsinfo.push({
        name: "Solved Average Difficulty",
        num: Math.round(sumok),
    })

    problemsinfo.push({
        name: "Wrong Average Difficulty",
        num: Math.round(sumwa),
    })
    problemsinfo.push({
        name: "Other Verdicts Average Difficulty",
        num: Math.round(sumot),
    })

    problemsinfo.push({
        name: "Max Difficulty among solved",
        num: Math.round(maxrating),
    })

    problemsinfo.push({
        name: "Min Difficulty among unsolved",
        num: Math.round(minrating),
    })

    return {
        userexists: state.user.userExists,
        name: state.user.name,
        usersubmissions: state.user.usersubmissions,
        tags: state.user.tags,
        verdicts: state.user.verdicts,
        byverdict: state.user.byverdict,
        problems: state.user.problemsbytags,
        verdictinfo: submissioninfo,
        verdictcount: data2,
        uniqueprob: uniqueprob,
        problemsinfo: problemsinfo,
        unsolved: unsolved,
        solved: solvedlist,
        qbyindex: qbyindex,
        qbyindexlist: qbyindexlist,
    }
}

export default connect(mapStateToProps, { fetchUSubmissions })(UserSubmissions)
/*
{this.props.tags.map((tag, index) => {
                        return <ProblemItem key={index} tag={tag} num={index + 1} data={this.props.problems.length} />
                    })}

{this.props.verdicts.map((tag, index) => {
                        return <ProblemItem key={index} tag={tag} num={index + 1} data={this.props.byverdict.length} />
                    })}
                    */