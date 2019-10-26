const db = require('../models');

module.exports = {
  findAll: (req, res) => db.Book
    .find({})
    .sort({date: -1})
    .then(dbBooks => res.json(dbBooks))
    .catch(err => res.status(502).json(err)),

  create: (req, res) => db.Book
    .create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(502).json(err)),

  delete: (req, res) => db.Book
    .findByIdAndDelete(req.params.id)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(502).json(err))
};
