var repo = require('./repositories/task'),
    errors = require('./configs/errors');

var service = {
  get: function(payload, message, callback){
    repo.get(payload, function(err, data){
      if (err){ return callback(err, null); }

      if (data.length === 0){ return callback(errors["404"].body, null); }

      callback(null, data[0]);
    });
  }
};

module.exports = service;
