import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div >
                <div class="card" >
                    <div class="card-header bg-info">
                        {this.props.heading}
                    </div>
                    <ul class="list-group list-group-flush" style={{ fontSize: "13px" }}>

                        {this.props.data.map((datapoint, index) => (
                            <li class="list-group-item d-flex justify-content-between"> {datapoint.name}
                                <span class="card" style={{ padding: "1px" }}> {datapoint.num} </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
