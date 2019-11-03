var express = require('express');
var router = express.Router();
var {find} = require('../libs/db');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  let goods =  await find('homeGoods');
  res.json({goods});
});

module.exports = router;
