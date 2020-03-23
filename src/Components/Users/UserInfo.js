import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/userActions'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    componentDidMount() {
        const string = this.props.match.params.username;
        this.props.fetchUser(string);
    }



    render() {
        return (
            <React.Fragment>

                <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-center nav-tabs">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to={`/user`} className="nav-link"> {"<"} </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/user/${this.props.name}/info`} className="nav-link active"> Basic </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/user/${this.props.name}/ratinghistory`} className="nav-link"> Rating History </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/user/${this.props.name}/submissions`} className="nav-link"> Submissions </Link>
                        </li>
                    </ul>
                </nav>
                <div style={{ padding: "3rem" }}>
                    {this.props.name}	<br />
                    {this.props.userexists &&
                        <div>
                            <img src={this.props.info.titlePhoto} alt="Title" height="100" width="100"></img><br />
			Rank : {this.props.info.rank} <br />
			Organisation: {this.props.info.organisation} <br />
			Contribution: {this.props.info.contribution} <br />
			Rating: {this.props.info.rating} <br />
			Maxrank: {this.props.info.maxRank} <br />
			MaxRating: {this.props.info.maxRating} <br />
                            <br />
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

UserInfo.propTypes = {
    fetchUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    userexists: state.user.userExists,
    name: state.user.name,
    info: state.user.info,
    ratinghist: state.user.ratinghist,
    usersubmissions: state.user.usersubmissions
})

export default connect(mapStateToProps, { fetchUser })(UserInfo)
