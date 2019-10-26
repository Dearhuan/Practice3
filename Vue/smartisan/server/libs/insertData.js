const request = require('request');
const {
  insert
} = require('./db');
request('https://shopapi.smartisan.com/mobile/skulist?page=3', (err, res, body) => {
  const news = JSON.parse(body).data.skuInfo;
  // console.log(news);
  news.forEach(ele => {
    console.log(ele)
    insert('goods', [ele]);
  })
  // insert('goods',[news])
})
