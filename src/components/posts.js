import React, { Component } from 'react'

class Posts extends Component {
constructor(props){
  super(props);
  this.state = {
    posts: []
  };
}

  componentDidMount(){
    console.log(123);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({posts: data}));
  }
  
  render() {
    const postItems = this.state.posts.map(p => (
      <div key = {p.id}>
        <h3>{p.title}</h3>        
        <p>{p.body}</p>
        <p>user: {p.userID} </p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>                
        {postItems}
      </div>
    );
  }
}

export default Posts;

