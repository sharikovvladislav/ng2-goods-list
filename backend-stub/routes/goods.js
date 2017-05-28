var express = require('express');
var router = express.Router();

/* GET goods listing. */
router.get('/', function(req, res, next) {
  res.send('kek');
});

module.exports = router;
