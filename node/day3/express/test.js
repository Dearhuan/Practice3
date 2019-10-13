const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const app = express();

//连接数据库
let con = mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'123456',
  database:'mydb'
});
con.connect();

let sql = 'SELECT * FROM book';
let str = '';
let path = './book.json';
con.query(sql,(err,result)=>{
  if(err){
    console.log('[SELECT ERROR]:',err.message);
  }
  str = JSON.stringify(result);
  // console.log(str);
  fs.exists(path,(exists)=>{
    if(exists){
      fs.appendFile(path,str,'utf-8',(err)=>{
        if(err){
          console.log('write error');
          throw err;
        }
      })
    }else{
      console.log('file is not exist,append a file');
      fs.writeFile(path,str,'utf-8',(err)=>{
        if(err){
          console.log('write file error');
          throw err;
        }
        console.log('success')
      })
    }
  })
});


//发送网络请求
app.get('/',(req,res)=>{
  // res.append('Access-Control-Allow-Origin', '*');
  res.send(str);
});

con.end();   

app.listen(3001,()=>{
  console.log('express app is listening on 3001')
})