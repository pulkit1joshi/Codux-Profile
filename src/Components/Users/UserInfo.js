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
                <div class="jumbotron text-center" style={{ padding: "3rem" }}>
                    <strong>{this.props.name} </strong>	<br /><br />
                    {this.props.userexists &&
                        <div class="ip">
                            <img src={this.props.info.titlePhoto} class="img-thumbnail " alt="Title" height="100" width="100"></img><br /><br />
                            <ul class="list-group">
                                <li class="list-group-item"><strong>Rank</strong> : {this.props.info.rank}</li>
                                <li class="list-group-item"><strong>Organisation:</strong>{this.props.info.organisation}</li>
                                <li class="list-group-item"><strong>Contributions:</strong>{this.props.info.contribution}</li>
                                <li class="list-group-item"><strong>Rating:</strong> {this.props.info.rating}</li>
                                <li class="list-group-item"><strong>Maxrank:</strong> {this.props.info.maxRank}</li>
                                <li class="list-group-item"><strong>MaxRating:</strong> {this.props.info.maxRating}</li>
                                <br />
                            </ul>
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
