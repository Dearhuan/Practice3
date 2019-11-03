var express = require('express');
var router = express.Router();
var {find} = require('../libs/db');

router.get(`/`, async function(req, res, next) {
  // res.send('respond with a resource');
  // let skuid = req.query.skuId * 1;
  let skuId = Number(req.query.skuId);
  console.log(typeof skuId,skuId);
  let item =  await find('goodlist',{"skuId":skuId});
  res.json({item});
});

module.exports = router;
