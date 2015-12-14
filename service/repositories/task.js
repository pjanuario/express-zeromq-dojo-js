var Task = require('./dao/task'),
    Model = require('../models/task');

var toModel = function(dao){
  dao.id = dao._id;
  return new Model(dao);
};

var repo = {
  get: function(params, callback){
    Task.find({ _id : params.id }, function(err, tasks){
      if (err) { return callback(err, null); }
      callback(null, tasks.map(toModel));
    });
  }
};

module.exports = repo;
