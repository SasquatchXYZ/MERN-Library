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
          image="https://i0.wp.com/www.wayfaringviews.com/wp-content/uploads/2016/05/Last_Bookstore.jpg?ssl=1"
        />
      </div>
    )
  }
}

export default Bookshelf;