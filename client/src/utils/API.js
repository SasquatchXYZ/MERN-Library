import axios from 'axios';

const DEFAULT_HPP = '15';

const PATH_BASE = 'https://www.googleapis.com/books/v1';
const PATH_SEARCH = '/volumes';
const PARAM_SEARCH = 'q=';
const PARAM_HPP = 'maxResults=';
const API_KEY = process.env.REACT_APP_API_KEY;

// console.log(process.env.REACT_APP_API_KEY);

export default {
  getGoogleBooks: function (search) {
    return axios.get(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${search}&${PARAM_HPP}${DEFAULT_HPP}&key=${API_KEY}`)
  },

  saveBook: function (bookData) {
    console.log(bookData)
  },

  deleteBook: function(book) {
    console.log(book)
  }
};