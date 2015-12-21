var repo = require('../repositories/user');

var defaultError = { error: "Ups, something wrong happen!!" };
var notImplemented = { error: "You need to implement this endpoint!" };

var controller = {
  get: function(req, res) {
    repo.get(req.params.id, function(err, data){
      if(err){ return res.status(500).json(defaultError); }

      res.json(data);
    });
  }
};

module.exports = controller;
