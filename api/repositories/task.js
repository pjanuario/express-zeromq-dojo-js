var Logger = require('../logger'),
    log = Logger.getLogger("TaskRepository"),
    Task = require('../models/task'),
    client = require('./task_client');

var repository = {
  get: function(id, callback) {
    var payload = { id: id };
    client.get(payload)
      .then(function(data){
        var data = new Task(data.payload);
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
