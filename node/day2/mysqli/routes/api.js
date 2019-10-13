const express = require('express');
const router = express.Router();

const db = require('../db/config');
const userSql = require('../db/userSql');

router.get('/users',(req,res,next)=>{
  let results = {};
  db.query(userSql.queryAll,[],(err,rows)=>{
    results = rows;
    // console.log('results:'+results);
    console.log(JSON.stringify(results));
    res.json({
      //xhr.status:获取当前服务器的响应状态  200=>成功
      status:200,
      msg:results
    })
  })
});

module.exports = router;