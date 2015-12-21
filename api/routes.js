var express = require('express'),
    router = express.Router(),
    tasksController = require('./controllers/task'),
    userController = require('./controllers/user');

router.get('/tasks/:id', tasksController.get);
router.get('/tasks/:id/user', userController.get);

router.get('/', function(req, res){
  res.json({ status: "API is running properly..." });
});

module.exports = router;
