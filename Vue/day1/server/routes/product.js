var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  var data = {
    code: 0,
    data: {
      name: 'aaa',
      pwd: '123'
    },
    isSuccess: true,
    msg: "请求成功"
  }

  //将product视图与指定的对象渲染后输出到客户端

  res.json(data);

});



module.exports = router;