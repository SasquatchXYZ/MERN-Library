const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  googleBookId: {
    type: String,
    required: true
  },
  thumbnail: String,
  link: {
    type: String,
    required: true
  },
  pageCount: String,
  subtitle: String,
  publishedDate: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;