var express = require('express');
var router = express.Router();
var user = require('../lib/test');

//查询所有
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  user.find((err,result)=>{
    if(err){
      throw err;
    }else{
      res.json(result);
      console.log(result)
    }
  })
});

module.exports = router;
