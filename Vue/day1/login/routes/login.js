var express = require('express');
var path = require('path');
var mysql = require('mysql');
var router = express.Router();

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

var con = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '123456', //修改为自己的密码
  database: 'express' //修改为自己的数据库
});

con.connect();
router.post('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../public/login.html'));
});

//登录功能
router.post('/login',(req,res)=>{
  let {
    username,
    password
  } = req.body;
  let sql = `SELECT * FROM User WHERE username = '${username}' and password = '${password}'`;
  con.query(sql,(err,result)=>{
    if(err) {
      console.log('error');
      throw err;
    }else{
      console.log(result);
      if(result.length == 0){
        res.json({
          status:0,
          msg:'username or password error'
        });
      }else{
        res.json({
          status:1,
          msg:'login success,welcome!'
        })
      }
    }
  })
});

//注册功能
router.post('/regist',(req,res)=>{
  let {
    username,
    password,
    repassword
  } = req.body;
  let _res = res;
  let sqlAll = `SELECT * FROM User`;
  let sql = `INSERT INTO User(username,password) VALUES('${username}','${password}')`;
  con.query(sqlAll,(err,res)=>{
    let isTrue = false;
    if(res){
      for(let i=0;i<res.length;i++){
        if(res[i].username == username && res[i].password == password){
          isTrue = true;
        }
      }
    };
    let data = {};
    data.isreg = !isTrue;
    if(isTrue){
      data.result = {
        status:1,
        msg:'user is existed'
      };
    }else{
      con.query(sql,(err,res)=>{
        if(res){
          data.result = {
            status:200,
            msg:'regist succes'
          };
        }else{
          data.result = {
            status:-1,
            msg:'regist failed'
          }      
        }
      })
    };
    if(err) data.err = err;
    setTimeout(()=>{
      responseJSON(_res,data)
    },300);

    // con.release();
  })
});


module.exports = router;