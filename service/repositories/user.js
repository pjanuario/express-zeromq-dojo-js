var request = require('superagent'),
    config = require('../config'),
    util = require('util');

var repo = {
  get: function(id, callback){
    var url = util.format("%s/users/%s", config.get('github').uri, id);
    request
      .get(url)
      .end(function(err, res){
        if (!err && !res.ok) {
          err = err || new Error("something wrong");
          callback(err, null);
        } else {
          var data = JSON.stringify(res.body);
          callback(null, data);
        }
      });
  }
};

module.exports = repo;
