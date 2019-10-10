const qs = require('querystring');
const str = 'http://www.baidu.com:8080/001?a=1&b=2#hash=20';

let obj = qs.parse(str,'?','&');
console.log(obj);