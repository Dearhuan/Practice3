var express = require('express');
var path = require('path');
var {
  find,
  insert
} = require('../database/db');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a login test');
});

//test insert
router.get('/update',async(req,res,next)=>{
  let result = await insert('users',[{username:"coco",password:"123"}])
  console.log(result);
})

//userlist
router.get('/list',async(req,res,next)=>{
  let data = await find('users');
  // let data = await find('users',{name:"hello1"});
  console.log(data.length);
  res.json(data);
});

//login
router.post('/login',async(req,res,next)=>{
  let {
    username,
    password
  } = req.body;
  let result =await find('users',{username:username,password:password});
  if(result.length == 0){
    console.log('no this user');
    res,json({
      status:0,
      msg:'username or password error'
    })
  }else{
    console.log('login success',result);
    res.json({
      status:1,
      msg:'login success'
    })
  }
});

router.post('/regist',async(req,res,next)=>{
  let {
    username,
    password,
    repassword
  } = req.body;
  let result = await find('users',{username:username});
  console.log(result[0].username)
  let isTrue = false; 
  if(result.length>0){
    console.log('user is exist',result);
  }else{
    // console.log('regist',result)
    if(result[0].username == username && result[0].password == password){
      isTrue = true;
    };
    let data = {};
    data.isreg = !isTrue;
    if(isTrue){
      data.result = {
        status:1,
        msg:'user is existed'
      };
    }else{
      insert('users',[{
        username:username,password:password
      }]);
      data.result = {
        status:200,
        msg:'regist success'
      }
    }
  }

})

module.exports = router;
