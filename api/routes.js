var express = require('express'),
    router = express.Router(),
    tasksController = require('./controllers/task');

router.get('/tasks/:id', tasksController.get);

module.exports = router;
