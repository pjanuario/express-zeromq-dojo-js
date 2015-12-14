var _ = require('lodash');

var Task = function(attrs){
  var whitelist = [
    'id', 'createdAt', 'updatedAt',
    'title', 'completed', 'userId'];

  // filter whitelisted properties
  _.merge(this, _.pick(attrs, whitelist));
};

module.exports = Task;
