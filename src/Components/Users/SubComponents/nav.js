import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-light navbar-light nav-tabs">
                    <ul className="navbar-nav nav-fill mx-auto" id="navid">
                        <li className="nav-item">
                            <Link to={`/`} className="nav-link"> {"<"} </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/${this.props.name}/info`} className="nav-link" > Basic </Link>
                        </li>
                        <li className="nav-item" onClick={this.clicked}>
                            <Link to={`/${this.props.name}/ratinghistory`} className="nav-link" > Rating History </Link>
                        </li>
                        <li className="nav-item" onClick={this.clicked}>
                            <Link to={`/${this.props.name}/submissions`} className="nav-link"> Submissions </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
