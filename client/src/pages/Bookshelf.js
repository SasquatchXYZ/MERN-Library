import React, { Component } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import BookshelfCard from '../components/BookshelfCard';

class Bookshelf extends Component {
  state = { books: [] };

  loadBookshelf = () => {
    API.getBookshelf()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBookshelf())
      .catch(err => console.log(err))
  };

  // Lifecycle Method
  componentDidMount() {
    this.loadBookshelf()
  }

  render() {
    return (
      <div className="container">
        <Jumbotron
          title="My Bookshelf"
          lead="All of You're Saved Books in One Convenient Location."
          instructions="View your book at Google, or Remove it from your Shelf."
          image="https://i0.wp.com/www.wayfaringviews.com/wp-content/uploads/2016/05/Last_Bookstore.jpg?ssl=1"
        />
        <BookshelfCard
          books={this.state.books}
          deleteBook={this.deleteBook}
        />
      </div>
    )
  }
}

export default Bookshelf;