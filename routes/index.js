const router = require('express').Router();
const bookshelfRoutes = require('./bookshelf');

router.use('/bookshelf', bookshelfRoutes);

module.exports = router;