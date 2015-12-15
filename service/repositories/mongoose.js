var mongoose = require('mongoose'),
    config = require('../config');

var dbConfig = config.get('database');
mongoose.set('debug', dbConfig.log);
mongoose.connect(dbConfig.uri);

module.exports = mongoose;
