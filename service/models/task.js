var _ = require('lodash');

var Task = function(attrs){
  var whitelist = [
    'id', 'createdAt', 'updatedAt',
    'title', 'completed', 'userId'];

  var defaults = {
    id: null, createdAt: null, updatedAt: null,
    title: null, completed: false, userId: null
  };

  // filter whitelisted properties
  var props = _.pick(attrs, whitelist);

  // set defaults on this
  _.defaults(this, props, defaults);
};

module.exports = Task;
