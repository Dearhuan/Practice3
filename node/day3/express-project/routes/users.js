const express = require('express');
const mysql = require('mysql');
const userSQL = require('../db/Usersql');
const dbConfig = require('../db/DBConfig');
const router = express.Router();

var pool = mysql.createConnection(dbConfig.mysql);
// console.log(pool)
var responseJSON  = (res,ret)=>{
  if(typeof ret === 'undefined'){
    res.json({
      code:'-200',
      msg:'failed'
    });
  }else{
    res.json(ret);
  }
};

// 用户注册
router.get('/reg',function (req, res, next) {
  // 从连接池获取连接
  pool.getConnection(function (err, connection) {
      // 获取前台页面传过来的参数
      var param = req.query || req.params;
      var UserName = param.uid;
      var Password = param.name;
      var _res = res;
      connection.query(userSQL.queryAll, function (err, res) {
          var isTrue = false;
          if(res){ //获取用户列表，循环遍历判断当前用户是否存在
              for (var i=0;i<res.length;i++) {
                  if(res[i].uid == UserName && res[i].userName == Password) {
                      isTrue = true;
                  }
              }
          }
          var data = {};
          data.isreg = !isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
          if(isTrue) {
              data.result = {
                  code: 1,
                  msg: '用户已存在'
              };//登录成功返回用户信息
          } else {
              connection.query(userSQL.insert, [param.uid,param.name], function (err, result) {
                  if(result) {
                      data.result = {
                          code: 200,
                          msg: '注册成功'
                      };
                  } else {
                      data.result = {
                          code: -1,
                          msg: '注册失败'
                      };
                  }
              });
          }

          if(err) data.err = err;
          // 以json形式，把操作结果返回给前台页面
          setTimeout(function () {
              responseJSON(_res, data)
          },300);
          // responseJSON(_res, data);
          // 释放链接
          connection.release();

      });
  });
});


// 用户登录
router.get('/login',function (req, res, next) {
  // 从连接池获取连接
  pool.getConnection(function (err, connection) {
      // 获取前台页面传过来的参数
      var param = req.query || req.params;
      var UserName = param.uid;
      var Password = param.name;
      var _res = res;
      connection.query(userSQL.queryAll, function (err, res, result) {
          var isTrue = false;
          if(res){ //获取用户列表，循环遍历判断当前用户是否存在
              for (var i=0;i<res.length;i++) {
                  if(res[i].uid == UserName && res[i].userName == Password) {
                      isTrue = true;
                  }
              }
          }
          var data = {};
          data.isLogin = isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
          if(isTrue) {
              data.userInfo = {};
              data.userInfo.uid = UserName;
              data.userInfo.userName = Password;
          } //登录成功返回用户信息
          if(result) {
              result = {
                  code: 200,
                  msg: 'succeed'
              };
              data.result = result;
          }
          if(err) data.err = err;
          // 以json形式，把操作结果返回给前台页面
          responseJSON(_res, data);

          // 释放链接
          connection.release();

      });
  });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
