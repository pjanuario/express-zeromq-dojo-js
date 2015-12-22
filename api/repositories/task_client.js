var ZSSClient = require('zmq-service-suite-client'),
    config = require('../config');

var client = new ZSSClient(config.service);

module.exports = {
  get: function(payload) {
    return client.call("get", payload);
  }
};
