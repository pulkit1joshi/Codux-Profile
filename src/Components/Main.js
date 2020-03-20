import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchUser } from '../actions/userActions'
import { connect } from 'react-redux'


class Main extends Component {

constructor(props)
{
		super(props);
		this.state = {
			name: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
}

onSubmit(e)
{
	e.preventDefault();
	const string = 'https://codeforces.com/api/user.info?handles=' + this.state.name;
	console.log(string);
	this.props.fetchUser(string);
}

onChange(e)
{
	this.setState({[e.target.name]: e.target.value});
}

render() {
	return (
		
		<div>
			<form onSubmit={this.onSubmit}>
			Enter Name :
			<input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
			<button type="submit">Submit</button>
			<br/>
			{ this.props.userexists &&
			<div>
			Name : { this.props.name }	<br/>	
			Rank : {this.props.info.rank } <br/>
			</div>
			}
			</form>
		</div>
		)
	}
}

Main.propTypes = {
	fetchUser: PropTypes.func.isRequired
  };

const mapStateToProps = state => ({
	userexists: state.user.userExists,
	name: state.user.name,
	info: state.user.info
})

export default connect(mapStateToProps , { fetchUser })( Main );