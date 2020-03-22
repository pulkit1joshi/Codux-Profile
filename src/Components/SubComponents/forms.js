import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
            <div>

                <form>
                    Enter Handle :
			    <input type="text" name="name" className="form-control form-control" value={this.state.name} onChange={this.onChange} /><br />
                    <Link to={`/user/${this.state.name}/info`}><button type="submit" className="btn btn-light">Submit</button></Link>
                    <br />
                </form>

            </div>
        )
    }
}

Form.propTypes = {
    fetchUser: PropTypes.func.isRequired
};



export default Form;
