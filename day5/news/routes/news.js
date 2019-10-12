var express = require('express');
var {
  find,
  insert
} = require('../mongodb/db');

var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  let news = await find('news');
  res.json({news});
});

module.exports = router;
