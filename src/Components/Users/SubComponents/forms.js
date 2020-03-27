import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './from.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="row text-center">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <form>

                        <input type="text" name="name" className="form-control form-control " id="ip1" value={this.state.name} placeholder="Your Handle Here" onChange={this.onChange} /><br /><br />
                        <Link to={`/${this.state.name}/info`}><button type="submit" className="btn btn-dark">Get Data</button></Link>
                        <br />

                    </form>
                </div>
            </div>
        )
    }
}


export default Form;
