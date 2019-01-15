import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';

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
    console.log(`Search for: ${this.state.search}`);
    API.getGoogleBooks(this.state.search)
      .then(res => console.log(res.data.items))
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
      </div>
    )
  }
}

export default Search;