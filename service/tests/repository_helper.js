var Task = require('../repositories/dao/task');

var getDummyTask = function(){
  return {
    title: "this is a test task",
    completed: true,
    userId: "pjanuario",
    createdAt: "2015-12-14T14:51:06.157Z",
    updatedAt: "2015-12-15T14:51:06.157Z"
  };
};

var helper = {
  dummyTask: getDummyTask,
  create: function(callback){
    new Task(getDummyTask()).save(function (err, data) {
      return callback(err, data);
    });
  },
};

module.exports = helper;
