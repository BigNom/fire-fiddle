import React, { Component } from 'react';

class Posts extends Component {
  render() {
    if (this.props.loading) {
      return (
        <div>
        Loading...
        </div>
      );
    }
    return (
      <div className="Posts">
      { Object.keys(posts).map(function(key) {
        return (
          <div key={key}>
          { posts[key].title }
          </div>
        );
      })}
        
      </div>
    );
  }
}

export default Posts;