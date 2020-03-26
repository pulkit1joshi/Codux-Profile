import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUSubmissions } from '../../actions/userActions'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import HBar from '../SubComponents/HBar'
import PieChart from '../SubComponents/PieChart'
//import ProblemItem from './SubComponents/problemitem'

export class UserSubmissions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pr: 'pr',
        }
    }

    componentDidMount() {
        const string3 = this.props.match.params.username;
        if (string3)
            this.props.fetchUSubmissions(string3);
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
                <nav className="navbar navbar-expand-sm bg-light navbar-light nav-tabs">
                    <ul className="navbar-nav nav-fill mx-auto" id="navid">
                        <li className="nav-item">
                            <Link to={`/user`} className="nav-link"> {"<"} </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/user/${this.props.name}/info`} className="nav-link"> Basic </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/user/${this.props.name}/ratinghistory`} className="nav-link"> Rating History </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/user/${this.props.name}/submissions`} className="nav-link active"> Submissions </Link>
                        </li>
                    </ul>
                </nav>
                <div style={{ padding: "3rem" }} >


                    <div className="card card-body" style={{ marginTop: "3rem" }}>
                        <HBar tags={this.props.tags} data={this.props.problems} height={this.props.tags.length} />
                    </div>



                    <div className="card card-body" style={{ marginTop: "3rem" }}>
                        <PieChart tags={this.props.verdicts} data={this.props.byverdict} color={color} />
                    </div>



                </div>
            </React.Fragment>
        )
    }
}

UserSubmissions.propTypes = {
    fetchUSubmissions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userexists: state.user.userExists,
    name: state.user.name,
    usersubmissions: state.user.usersubmissions,
    tags: state.user.tags,
    verdicts: state.user.verdicts,
    byverdict: state.user.byverdict,
    problems: state.user.problemsbytags,
})

export default connect(mapStateToProps, { fetchUSubmissions })(UserSubmissions)
/*
{this.props.tags.map((tag, index) => {
                        return <ProblemItem key={index} tag={tag} num={index + 1} data={this.props.problems.length} />
                    })}

{this.props.verdicts.map((tag, index) => {
                        return <ProblemItem key={index} tag={tag} num={index + 1} data={this.props.byverdict.length} />
                    })}
                    */