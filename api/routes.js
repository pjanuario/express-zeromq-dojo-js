var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
  res.json({ ok: true })
});

module.exports = router;
