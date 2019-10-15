import $ from 'jquery';
import 'weui';
import './styles/style.css';
import header from './templates/header.html';
import search from './templates/search.html';
import list from './templates/list.html';
import footer from './templates/footer.html';
import getNews from './libs/getNews';

$('body').html(header+search+list+footer);
getNews();
$('.weui-panel__ft').click(()=>{
  getNews();
})

