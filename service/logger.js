var Logger = require('logger-facade-nodejs'),
    LoggerConsolePlugin = require('logger-facade-console-plugin-nodejs');

// this is the default config
var config = {
  level: 'info',
  timeFormat: 'YYYY-MM-DD HH:mm:ss',
  messageFormat: '%time | %logger::%level - %msg'
};

var plugin = new LoggerConsolePlugin(config);
Logger.use(plugin);

module.exports = Logger;
