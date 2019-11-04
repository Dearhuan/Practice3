var express = require('express');
var router = express.Router();
var {find} = require('../libs/db');

/* router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  let goods =  await find('goods');
  res.json({goods});
}); */

router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  let goods =  await find('goodlist');
  res.json({goods});
});

/* router.post('/', async function(req, res, next) {
  // res.send('respond with a resource');
  let page = req.body.page;
  let start = req.body.start;
  let limitNum = 10;
  let end = page * limitNum;
  console.log(page,start,end);
  let goods =  await find('goodlist');
  // console.log(goods);
  // console.log(goods.slice(start,end));
  let arr =  goods.slice(start,end);     //返回指定数量的数据，一次十条(1-10.11-20)
  console.log(arr);
  res.json({arr});
}); */

module.exports = router;
