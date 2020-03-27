import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContestItem from './SubComponents/contestitem.js'
import { fetchContests } from '../../actions/cfactions'

export class Upcoming extends Component {
    componentDidMount() {
        if (this.props.fetched === 0) this.props.fetchContests();
        console.log("Upcoming is loaded");
    }

    render() {
        return (
            <React.Fragment>
                <div class="card">
                    <div class="card-header bg-info text-white d-flex justify-content-between">
                        <span>Upcoming Contests</span>

                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Name</th>
                                <th scope="col">Time Left</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.upcominglist.map((contest, index) => (
                                <ContestItem key={index} item={contest} num={index + 1} type={1} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

Upcoming.propTypes = {
    fetchContests: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    fetched: state.contest.fetched,
    upcominglist: state.contest.upcominglist,
})

export default connect(mapStateToProps, { fetchContests })(Upcoming)

