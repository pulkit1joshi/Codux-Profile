import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContestItem from '../SubComponents/contestitem.js'
import { fetchContests } from '../../../actions/cfactions'

export class Div1 extends Component {
    componentDidMount() {
        if(this.props.fetched===0) this.props.fetchContests();
    }

    render() {
        return (
            <React.Fragment>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.Div1list.map((contest, index) => (
                            <ContestItem key={index} item={contest} num={index + 1} type={0} />
                        ))}
                    </tbody>
                </table>
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

