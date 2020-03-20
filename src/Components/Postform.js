import React, { Component } from 'react'

class PostForm extends Component {

constructor(props)
{
		super(props);
		this.state = {
            name: '',
            message:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
}

onChange(e) {
    this.setState({[e.target.name]: e.target.value});
}

onSubmit(e)
{
    e.preventDefault();
    const post = {
        name:this.state.name,
        message: this.state.message
    }

    fetch('https://jsonplaceholder.typicode.com/posts' , 
    { 
        method: 'POST',
        headers: { 
            'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
}

render() {
	return (
        <div>
		<h1> Add Posts
		</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>
                    Name:
                </label><br/>
                <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
            </div><br/>
            <div>
                <label>
                    Message:
                </label><br/>
                <textarea name="message" value={this.state.message} onChange={this.onChange}/>
            </div> <br/>
            <button type="submit">Submit</button>
        </form>
        </div>
		)
	}
}

export default PostForm;