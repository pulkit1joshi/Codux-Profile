import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContestItem from '../SubComponents/contestitem.js'
import { fetchContests } from '../../../actions/cfactions'

export class Div1 extends Component {
    componentDidMount() {
        if (this.props.fetched === 0) this.props.fetchContests();
    }

    render() {
        return (
            <React.Fragment>
                <div class="card" >
                    <div class="card-header bg-info text-white d-flex justify-content-between">
                        <span>Divison 1 Contests</span>

                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>#</th>
                                <th scope="col" style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>Date</th>
                                <th scope="col" style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.Div1list.map((contest, index) => (
                                <ContestItem key={index} item={contest} num={index + 1} type={0} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

Div1.propTypes = {
    fetchContests: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    fetched: state.contest.fetched,
    Div1list: state.contest.div1list,
})

export default connect(mapStateToProps, { fetchContests })(Div1)

