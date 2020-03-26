import React, { Component } from 'react'

export default class ProblemItem extends Component {
    render() {
        return (
            <div>
                {this.props.num}. Tag: { this.props.tag} {this.props.data}
            </div>
        )
    }
}
