var mongoose = require('mongoose'),
    config = require('../config');

mongoose.set('debug', true);
mongoose.connect(config.get('database').uri);

module.exports = mongoose;
