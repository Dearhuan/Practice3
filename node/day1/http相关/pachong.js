const cheerio = require('cheerio');
const superagent = require('superagent');
const request = require('request');
const fs = require('fs');

let url = 'https://www.sina.com.cn/?from=sougou';

let arr = [];

superagent.get(url)
  .end((err,res)=>{
    if(err) {
      console.log(err);
      return;
    }
    let $ = cheerio.load(res.text);
    $('.uni-blk-pic').each((index,ele)=>{
      let o = {};
      let title = $(ele).find('span').text();
      o.title = JSON.stringify(title);
      if($(ele).find('img').length > 0){
        o.img = ($(ele).find('img').attr('src'));
      };
      arr.push(o);
    })
    console.log(arr);
  })