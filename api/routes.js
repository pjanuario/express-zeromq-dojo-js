var express = require('express'),
    router = express.Router(),
    tasksController = require('./controllers/task');

router.get('/tasks/:id', tasksController.get);
router.get('/', function(req, res){
  res.json({ status: "API is running properly..." });
});

module.exports = router;
