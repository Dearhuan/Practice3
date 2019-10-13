const http = require('http');

let config = {
  host:'localhost',
  port: 1988,
  path:'/',
  method:'GET',
  headers:{
    a:1
  }
}
let client = http.request(config,(res)=>{
  let repData = '';
  res.on('data',(data)=>{
    repData = data.toString()
    console.log(repData)
  });
  res.on('end',()=>{

  })
})
client.end();