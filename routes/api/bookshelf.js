const router = require('express').Router();
const bookshelfController = require('../../controllers/bookshelfController');

router.route('/')
  .get(bookshelfController.findAll)
  .post(bookshelfController.create);

router.route('/:id')
  .delete(bookshelfController.delete);

module.exports = router;