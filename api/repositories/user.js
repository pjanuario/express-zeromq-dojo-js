var ZSSClient = require('zmq-service-suite-client'),
    config = require('../config'),
    Logger = require('../logger'),
    log = Logger.getLogger("UserRepository"),
    User = require('../models/user');

var client = new ZSSClient(config.service);

var toModel = function(data){
  return new User(data);
};

var repository = {
  get: function(id, callback) {
    var payload = { id: id };
    client.call("getUser", payload)
      .then(function(data){
        log.info("data received", data.payload);
        var data = toModel(data.payload);
        callback(null, data);
      })
      .fail(function(error){
        log.info("fail with code: %s and user message: %s and dev message %s",
          error.code, error.userMessage, error.developerMessage);
        callback(error, null);
      });
  }
};

module.exports = repository;
