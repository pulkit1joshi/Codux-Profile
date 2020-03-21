import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchUser, fetchRatingHist } from '../actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RatingItem from './ratingitem.js'

/* Available data :

1. this.props.name
2. this.props.info

3. this.props.ratinghist

*/

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
	const string2 = 'https://codeforces.com/api/user.rating?handle=' + this.state.name;
	this.props.fetchRatingHist(string2);
}

onChange(e)
{
	this.setState({[e.target.name]: e.target.value});
	console.log(this.props.ratinghist[0]);
}

render() {
	return (
		<React.Fragment>
			<div className="row">
		<div className="col-sm-4"></div>
		<div className="col-sm-4">
			<form onSubmit={this.onSubmit}>
			Enter Handle :
			<input type="text" name="name" className="form-control form-control" value={this.state.name} onChange={this.onChange} /><br/>
			<button type="submit" className="btn btn-light">Submit</button>
			<br/>
			{ this.props.userexists &&
			<div>
			<img src={this.props.info.titlePhoto} alt="Title" height="100" width="100"></img><br/>
			Handle : { this.props.name }	<br/>	
			Rank : {this.props.info.rank } <br/>
			Organisation: { this.props.info.organisation } <br/>
			Contribution: { this.props.info.contribution } <br/>
			Rating: { this.props.info.rating } <br/>
			Maxrank: { this.props.info.maxRank } <br/>
			MaxRating: { this.props.info.maxRating } <br/>

			<br/>
			{this.props.ratinghist.map((contest, index) => (
        	<RatingItem key={index} item={contest} num={index+1} />
      		))}
			</div>
			}
			</form>
		</div>
		<div className="col-sm-4"></div>
		</div>
		</React.Fragment>
		)
	}
}

Main.propTypes = {
	fetchUser: PropTypes.func.isRequired
  };

const mapStateToProps = state => ({
	userexists: state.user.userExists,
	name: state.user.name,
	info: state.user.info,
	ratinghist: state.user.ratinghist
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUser, fetchRatingHist}, dispatch)
  }

export default connect(mapStateToProps , mapDispatchToProps)( Main );