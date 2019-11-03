const request = require('request');
const {
  insert
} = require('./db');
//插入首页列表数据
/* request('https://shopapi.smartisan.com/mobile/skulist?page=3', (err, res, body) => {
  const goods = JSON.parse(body).data.skuInfo;
  // console.log(news);
  goods.forEach(ele => {
    console.log(ele)
    insert('goods', [ele]);
  })
  // insert('goods',[news])
}); */

//插入分类数据
/* request('https://shopapi.smartisan.com/mobile/classify',(err,res,body)=>{
  const classifyGoods = JSON.parse(body);
  console.log(classifyGoods);
  insert('classifyGoods',[classifyGoods]);
});
 */

 //插入首页分类数据
/* request('https://shopapi.smartisan.com/mobile/home',(err,res,body)=>{
  const homeGoods = JSON.parse(body);
  console.log(homeGoods);
  insert('homeGoods',[homeGoods]);
}) */


request('http://localhost:3000/goods',(err,res,body)=>{
  const goods = JSON.parse(body);
  // console.log(goods[0]);
  // console.log(goods.goods);
  let arr=goods.goods;
  // console.log(arr[1]);
  let list = [];
 for(var key in arr[0]){
    // console.log(arr[key].spuId);
    let data=arr[0][key]
    // console.log(typeof(data));
    
  // insert('goodlist',[{
  //   datas:data
  // }])
   list.push(arr[0][key]);
  } 
  // console.log(list.length);
  // console.log(list[list.length-1]);
  // console.log(list.slice(0,list.length-1))
  let ilist = list.slice(0,list.length-1);
  // console.log(ilist.length)

  ilist.forEach(ele=>{
    console.log(ele);
    insert('goodlist',[ele])
  })
})


