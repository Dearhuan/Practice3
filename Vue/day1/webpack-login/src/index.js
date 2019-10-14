
require('./bootstrap.css')
require('./sign.css')
var html = require('./login-min.html')

require('jquery')
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$('body').html(html)

require('./login')