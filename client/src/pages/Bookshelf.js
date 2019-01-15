import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';

class Bookshelf extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron
          title="My Bookshelf"
          lead="All of You're Saved Books in One Convenient Location."
          instructions="View your book at Google, or Remove it from your Shelf."
        />
      </div>
    )
  }
}

export default Bookshelf;