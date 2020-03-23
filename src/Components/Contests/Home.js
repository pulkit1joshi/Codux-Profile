import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div >
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Label</th>
                            <th scope="col">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td> 1.</td>
                    <td>Total </td>
                    <td>{this.props.counts.total}</td>
                    </tr>
                    <tr>
                    <td>2.</td>
                    <td>Upcoming </td>
                    <td>{this.props.counts.upcoming}</td>
                    </tr>
                    <tr>
                    <td>3.</td>
                    <td>Division 1 </td>
                    <td>{this.props.counts.div1}</td>
                    </tr>
                    <tr>
                    <td>4.</td>
                    <td>Division 2 </td>
                    <td>{this.props.counts.div2}</td>
                    </tr>
                    <tr>
                    <td>5.</td>
                    <td>Division 3 </td>
                    <td>{this.props.counts.div3}</td>
                    </tr>
                    <tr>
                    <td>6.</td>
                    <td>Global </td>
                    <td>{this.props.counts.global}</td>
                    </tr>
                    <tr>
                    <td>7.</td>
                    <td>Code Forces Format </td>
                    <td>{this.props.counts.cf}</td>
                    </tr>
                    <tr>
                    <td>8.</td>
                    <td>IOI Format</td>
                    <td>{this.props.counts.ioi}</td>
                    </tr>
                    <tr>
                    <td>9.</td>
                    <td>ICPC Format</td>
                    <td>{this.props.counts.icpc}</td>
                    </tr>
                    </tbody>
                </table> 
            </div>
        )
    }
}
