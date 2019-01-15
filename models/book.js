const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {},
  author: {},
  description: {},
  bookID: {},
  thumbnail: {},
  link: {},
  pageCount: {},
  subtitle: {},
  publishedDate: {},
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;