var _ = require('lodash');

var User = function(attrs){
  var whitelist = ['id', 'name', 'email', 'avatarUrl'];

  var defaults = { id: null, name: null, email: null, avatarUrl: null };

  // filter whitelisted properties
  var props = _.pick(attrs, whitelist);

  // set defaults on this
  _.defaults(this, props, defaults);
};

module.exports = User;
