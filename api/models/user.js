var _ = require('lodash');

var User = function(attrs){
  var whitelist = ['id', 'name', 'email'];

  // filter whitelisted properties
  _.merge(this, _.pick(attrs, whitelist));
};

module.exports = User;
