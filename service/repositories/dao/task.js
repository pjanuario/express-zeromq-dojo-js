var mongoose = require('../mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamp');

var schema = mongoose.Schema({
  title:      String,
  completed:  { type: Boolean, default: false },
  userId:     String
});
schema.plugin(timestamps);

var Model = mongoose.model('Task', schema, 'tasks');

module.exports = Model;
