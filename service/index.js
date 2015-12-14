var ZSSService = require('zmq-service-suite-service'),
    Logger = require('./logger'),
    config = require('./config'),
    service = require('./service');

var instance = new ZSSService(config.get('service'));

// service operation
instance.addVerb('get', service.get);

instance.run();
