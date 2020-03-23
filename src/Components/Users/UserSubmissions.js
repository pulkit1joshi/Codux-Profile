import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUSubmissions } from '../../actions/userActions'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class UserSubmissions extends Component {

    componentDidMount() {
        const string3 = this.props.match.params.username;
        this.props.fetchUSubmissions(string3);
    }

    render() {
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
                <div style={{ padding: "5rem" }}>
                    {this.props.name}
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
    usersubmissions: state.user.usersubmissions
})

export default connect(mapStateToProps, { fetchUSubmissions })(UserSubmissions)
