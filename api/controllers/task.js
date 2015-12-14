var repo = require('../repositories/task');

var defaultError = { error: "Ups, something wrong happen!!" };
var notImplemented = { error: "You need to implement this endpoint!" };

var controller = {
  all: function(req, res) {
    res.status(500).json(notImplemented);
  },
  get: function(req, res) {
    repo.get(req.params.id, function(err, data){
      if(err){ return res.status(500).json(defaultError); }

      res.json(data);
    });
  },
  create: function(req, res) {
    res.status(500).json(notImplemented);
  },
  delete: function(req, res) {
    res.status(500).json(notImplemented);
  },
  update: function(req, res) {
    res.status(500).json(notImplemented);
  }
};

module.exports = controller;
