import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
//import SearchForm from '../components/SearchForm';

class Search extends Component {
  state = {
    search: '',
    results: [],
    error: ''
  };

  handleInputChange = event => {
    this.setState({search: event.target.value})
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log(`Search for: ${this.state.search}`)
  };





  render() {
    return (
      <div className="container">
        <Jumbotron
          title="Search"
          lead="Using Google Books API"
          instructions="Search for a book, then view it, or add it to your library..."
        />
      </div>
    )
  }
}

export default Search;