const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

let arr = [];
let path = './meinv.json';
let option = {
  url: 'http://www.umei.cc/p/gaoqing/cn/',   //url
  // 不加入headers的话很可能会被拒绝访问
  headers: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive'
  }
}

request(option,function(err,res,body){
  if(!err && res.statusCode == 200){
    let $ = cheerio.load(body,{
      ignoreWhitespace:true,
      xmlMode:true
    });

    // console.log($('img'));
    let imgs = $('img');
    // console.log(imgs);
    imgs.each((index,ele)=>{
      let obj = {};
      obj.title = $(ele).attr('title');
      obj.src = $(ele).attr('src');
      arr.push(obj);
    })
    arr = JSON.stringify(arr);
    // console.log(arr);

    fs.exists(path,(exists)=>{
      if(exists){
        fs.appendFile(path,arr,'utf-8',(err)=>{
          if(err){
            console.log('文件写入错误！');
            throw err;
          }
        })
      }else{
        console.log('文件不存在，追加新文件');
        fs.writeFile(path,arr,'utf-8',(err)=>{
          if(err){
            console.log('文件写入错误！');
            throw(err);
          }
          console.log(`文件写入成功！写入位置: ${path}`)
        })
      }
    })
  }
});

