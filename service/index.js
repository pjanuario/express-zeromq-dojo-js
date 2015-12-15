var ZSSService = require('zmq-service-suite-service'),
    Logger = require('./logger'),
    config = require('./config'),
    service = require('./service'),
    serviceUser = require('./user_service');

var instance = new ZSSService(config.get('service'));

// service operation
instance.addVerb('get', service.get);
instance.addVerb('getUser', serviceUser.get);

instance.run();
