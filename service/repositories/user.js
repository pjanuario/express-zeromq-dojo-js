var request = require('superagent'),
    config = require('../config'),
    Logger = require('../logger'),
    log = Logger.getLogger("UserRepository"),
    util = require('util');

var repo = {
  get: function(id, callback){
    var url = util.format("%s/users/%s", config.get('github').uri, id);
    log.info("Request made to %s", url);
    request
      .get(url)
      .end(function(err, res){
        var payload = res.body;
        log.info("Response received from %s with status code: %s and payload %j", url, res.status, payload);

        if (err || !res.ok) {
          return callback(err || new Error("something wrong"), null);
        }

        callback(null, payload);
      });
  }
};

module.exports = repo;
