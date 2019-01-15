const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;