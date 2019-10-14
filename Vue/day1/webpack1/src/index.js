/* const $ = require('jquery');

console.log('hello webpack');
 */
import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import { Level } from '_chalk@2.4.2@chalk';

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //add your image
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component())