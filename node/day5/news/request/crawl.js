const request = require('request');
const {
  insert
} = require('./db');
request('https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1E54D0A71998AD&cp=5DA1F9981A5D5E1&max_behot_time=1570871174&_signature=SNK8-QAAFXRBnsbsWYOpiUjSvO&i=1570871174',(err,res,body)=>{
  const news = JSON.parse(body).data;
  news.forEach(ele=>{
    console.log(ele.title);
    console.log(ele.abstract);
    console.log(ele.image_list);
    insert('news',[{
      title:ele.title,
      info:ele.abstract,
      imgs:ele.image_list
    }]);
  })
})