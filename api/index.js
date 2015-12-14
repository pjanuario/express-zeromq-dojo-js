var express = require('express'),
    morgan = require('morgan'),
    config = require('./config'),
    router = require('./routes'),
    app = express();

// configure logging middleware
app.use(morgan('dev'));

// Allow CORS to be used by any client
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// configure application routes
app.use(router);

// hook application into the specified port
app.listen(config.port);

console.log('Server running on port %d', config.port);

module.exports = app;
