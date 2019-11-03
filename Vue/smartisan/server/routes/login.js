var express = require('express');
var router = express.Router();
var {
  find,
  insert
} = require('../libs/db');

/* GET users listing. */
router.post('/', async function (req, res, next) {
  // res.send('respond with a resource');
  let username = req.body.username;
  let password = req.body.password;
  if (username == '' || password == '') {
    res.json({
      status: 1,
      msg: '用户名或密码不能为空'
    });
    return;
  } else {
    let user = await find('users', {
      username,
      password
    });
    console.log(user);
    if (user.length==0) {
      res.json({
        status: 2,
        msg: '用户名或密码错误'
      });
      return;
    } else {
      res.json({
        status: 200,
        username: username,
        msg: '登录成功'
      });
      return;
    }
  }
});


module.exports = router;
