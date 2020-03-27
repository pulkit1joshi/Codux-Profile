import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContestItem from '../SubComponents/contestitem.js'
import { fetchContests } from '../../../actions/cfactions'

export class Div2 extends Component {
    componentDidMount() {
        if (this.props.fetched === 0) this.props.fetchContests();
    }

    render() {
        return (
            <React.Fragment>
                <div class="card">
                    <div class="card-header bg-info text-white d-flex justify-content-between">
                        <span>Divison 2 Contests</span>

                    </div>

                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.Div2list.map((contest, index) => (
                                <ContestItem key={index} item={contest} num={index + 1} type={0} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

Div2.propTypes = {
    fetchContests: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    fetched: state.contest.fetched,
    Div2list: state.contest.div2list,
})

export default connect(mapStateToProps, { fetchContests })(Div2)

