var express = require('express');
var router = express.Router();
var {find,insert} = require('../libs/db');

router.post('/', async function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let repassword = req.body.repassword;
  console.log(username,password,repassword);
  if(username == ''){
    res.json({
      status: 1,
      msg: '用户名不能为空'
    });
    return;
  };
  if(password == ''){
    res.json({
      status: 2,
      msg: '密码不能为空'
    });
    return;
  };
  if(password != repassword){
    res.json({
      status: 3,
      msg: '两次输入的密码不一致'
    });
    return;
  };
  let user = await find('users',{username});
  console.log(user);
  if(user.length>0){
    res.json({
      status: 4,
      msg: '用户名不可用'
    });
    return;
  }else{
    insert('users',[{username,password}]);
    res.json({
      status: 100,
      msg: '注册成功',
      username: username
    });
  }
});


module.exports = router;
