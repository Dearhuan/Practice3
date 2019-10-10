const cheerio = require('cheerio');
const superagent = require('superagent');
const jsdom = require('jsdom');
const request = require('request');
const fs = require('fs');
console.log(jsdom);
const {JSDOM} = jsdom;


let url = 'http://www.umei.cc/p/gaoqing/cn/';

let arr = [];

superagent.get(url)
  .end((err,res)=>{
    if(err){
      copsole.log(err);
      return;
    }
    let $ = cheerio.load(res.text);
    // console.log(res)
    // console.log($('.TypeList').children())
    let lis = ($('.TypeList').children());
    // console.log(lis)
    console.log(lis)

  })