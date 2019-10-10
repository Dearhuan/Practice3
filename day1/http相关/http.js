const http = require('http');
// console.log(http);

const server = http.createServer((req,res)=>{
  res.writeHead(200,{
    "Content-Type":"text/html;charset=UTF-8"
  });
  res.end('welcome to node http');
})

server.listen(1908,()=>console.log('listening port 1908'));

