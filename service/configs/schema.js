module.exports = {
  env: {
    doc: "The applicaton environment.",
    format: ["production", "test", "development"],
    default: "development",
    env: "NODE_ENV"
  },
  // ZSS Service Configuration
  service: {
    sid: {
      doc: "The service name identifier",
      format: String,
      default: "TASKS"
    },
    broker: {
      doc: "ZSS Broker Backend Address",
      format: String,
      default: "tcp://127.0.0.1:7776"
    },
    heartbeat: {
      doc: "ZSS Service heartbeat interval in ms",
      format: "int",
      default: 1000
    }
  }
};
