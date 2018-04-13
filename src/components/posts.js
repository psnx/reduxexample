import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate(nextProps) {
    console.log('prop received');
    if(nextProps.newPost) {
      console.log('prop received');
      this.props.posts.unshift(nextProps.newPost);
    }
  }

 
  render() {
    const postItems = this.props.posts.map(p => (
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

