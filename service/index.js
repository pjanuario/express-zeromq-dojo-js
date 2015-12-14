var ZSSService = require('zmq-service-suite-service'),
    Logger = require('./logger'),
    config = require('./config'),
    service = require('./service');

var instance = new ZSSService(config.service);

// service operation
instance.addVerb('get', service.get);

instance.run();
