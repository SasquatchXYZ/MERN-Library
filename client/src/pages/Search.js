import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import BookCard from '../components/BookCard';

class Search extends Component {
  state = {
    search: '',
    results: [],
    error: '',
    saveId: ''
  };

  saveBook = event => {
    this.setState({saveId: event.target.id});
    // console.log(this.state.results);
    // console.log(event.target.id);

    const chosenBook = this.state.results.find(book => book.id === event.target.id);
    // console.log(chosenBook);

    const newSave = {
      title: chosenBook.volumeInfo.title,
      author: chosenBook.volumeInfo.authors
        ? chosenBook.volumeInfo.authors[0]
        : 'No Author Listed',
      description: chosenBook.volumeInfo.description,
      bookID: chosenBook.id,
      thumbnail: chosenBook.volumeInfo.imageLinks.thumbnail,
      link: chosenBook.volumeInfo.canonicalVolumeLink,
      pageCount: chosenBook.volumeInfo.pageCount,
      subtitle: chosenBook.volumeInfo.subtitle,
      publishedDate: chosenBook.volumeInfo.publishedDate,
    };

    // console.log(newSave);
    API.saveBook(newSave)
      .then(res => console.log(res.status, res.statusText))
      .catch(err => console.log(err))
  };

  handleInputChange = event => {
    this.setState({search: event.target.value})
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(`Search for: ${this.state.search}`);
    API.getGoogleBooks(this.state.search)
      .then(res => this.setState({results: res.data.items}))
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container">
        <Jumbotron
          title="Search"
          lead="Using Google Books API"
          instructions="Search for a book, then view it, or add it to your library..."
          image="https://www.travelcaffeine.com/wp-content/uploads/2017/07/last-bookstore-tunnel-downtown-los-angeles-california-876.jpg"
        />
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <BookCard
          results={this.state.results}
          saveBook={this.saveBook}
        />
      </div>
    );
  }
}

export default Search;