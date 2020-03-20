import React, { Component } from 'react'

class Posts extends Component {

constructor(props)
{
		super(props);
		this.state = {
			posts: []
		}
}

componentWillMount() {
	fetch('http://127.0.0.1:8000/api/leads')
	.then(res=> res.json())
	.then(data => this.setState({ posts: data }))
	.then(data => console.log(data));
}

render() {
	const postItems = this.state.posts.map(post => (
		<div key={post.id}>
		<h5>Message from : {post.name} <br/>
		Message : { post.message } <br/></h5>
		</div>
	));
	return (
		<h1> Posts
			{postItems}
		</h1>
		)
	}
}

export default Posts;