var config = {
  port: 8081,
  service: {
    // broker frontend address
    broker: 'tcp://127.0.0.1:7777',
    // service unique identifier
    sid: 'TASKS',
    // client identity (optional), defaults to 'client'
    identity: "API",
    // client timeout in ms (optional), defaults to 1s
    timeout: 1000
  }
};

module.exports = config;
