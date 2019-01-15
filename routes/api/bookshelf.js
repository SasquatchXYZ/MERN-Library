const router = require('express').Router();
const bookshelfController = require('../../controllers/bookshelfController');

// Matches with '/api/bookshelf'
router.route('/')
  .get(bookshelfController.findAll)
  .post(bookshelfController.create);

// Matches with '/api/bookshelf/:id'
router.route('/:id')
  .delete(bookshelfController.delete);

module.exports = router;