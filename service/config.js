var config = {
  service: {
    // service name
    sid: 'TASKS',
    // broker backend address
    broker: "tcp://127.0.0.1:7776",
    // service heartbeat interval in ms (optional), defaults to 1s
    heartbeat: 1000
  }
};

module.exports = config;
