const db = require("../model");

// Defining methods for the HorsesController
module.exports = {
  findAll: function(req, res) {
    db.Horse
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Horse
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    console.log(req.params)
    db.Horse
      .findOne({name: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySire: function(req, res) {
    db.Horse
    .find({sire:req.params.sire})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findByMare: function(req, res) {
    console.log('I"M Being activated  Mare!!!!')
    db.Horse
      .find({mare:req.params.mare})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Horse
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Horse
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Horse
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
