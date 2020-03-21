import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchUser, fetchRatingHist , fetchUSubmissions} from '../actions/userActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RatingItem from './ratingitem.js'

/* Available data :

1. this.props.name
2. this.props.info
-------------------Data structure for info -----------------------------------------



{
      contribution: -1,
      lastOnlineTimeSeconds: 1,
      rating: ,
      friendOfCount: 0,
      titlePhoto: '//userpic.codeforces.com/no-title.jpg',
      rank: '',
      handle: '-e',
      maxRating: ,
      avatar: '//userpic.codeforces.com/no-avatar.jpg',
      registrationTimeSeconds: 1571594608,
      maxRank: ''
},

    

3. this.props.ratinghist

------------------- Data structure for ratinghist --------------------------------- ratinghist is array so each array element is as shown

ratinghist: [
      {
        contestId: 1,
        contestName: '',
        handle: 'name of the user',
        rank: his rank,
        ratingUpdateTimeSeconds: 1571936700,
        oldRating: rating old,
        newRating: rating new,
      },
	]

4. this.props.usersubmissions

------ It have the following data -------- Make sure this.props.usersubmissions[i] exists before checking out this.props.usersubmissions[i].id or contestId

       {
          "id": -1,
          "contestId": -1,
          "creationTimeSeconds": 0,
          "relativeTimeSeconds": 0,
          "problem": {
            "contestId": 0,
            "index": "1",
            "name": "",
            "type": "",
            "points": 1,
            "rating": 1,
            "tags": [
              "-",
              "-",
              "-"
            ]
          },
          "author": {
            "contestId": 1,
            "members": [
              {
                "handle": ""
              }
            ],
            "participantType": "PRACTICE",
            "ghost": false,
            "startTimeSeconds": 1
          },
          "programmingLanguage": "GNU C++14",
          "verdict": "OK",
          "testset": "TESTS",
          "passedTestCount": 66,
          "timeConsumedMillis": 296,
          "memoryConsumedBytes": 1638400
        }]

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
	const string3 = 'https://codeforces.com/api/user.status?handle=' + this.state.name;
	this.props.fetchUSubmissions(string3);
}

onChange(e)
{
	this.setState({[e.target.name]: e.target.value});
	//console.log(this.props.ratinghist[0]);
	for(var i=0;i<10;i++)
		if(this.props.usersubmissions[i])
			console.log(this.props.usersubmissions[i].id)
	
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
	ratinghist: state.user.ratinghist,
	usersubmissions: state.user.usersubmissions
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchUser, fetchRatingHist, fetchUSubmissions }, dispatch)
  }

export default connect(mapStateToProps , mapDispatchToProps)( Main );