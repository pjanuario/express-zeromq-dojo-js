var userRepo = require('./repositories/user'),
    taskRepo = require('./repositories/task'),
    errors = require('./configs/errors');

var service = {
  get: function(payload, message, callback){
    taskRepo.get(payload, function(err, data){
      userRepo.get(data[0].userId, function(err, data){
       callback(err, data);
      });
    });
  }
};

module.exports = service;
