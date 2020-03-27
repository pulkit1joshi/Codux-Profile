import React, { Component } from 'react'

export default class RatingItem extends Component {

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                {this.props.num}. Contest Name: { this.props.item.contestName}
            </div>
        )
    }
}