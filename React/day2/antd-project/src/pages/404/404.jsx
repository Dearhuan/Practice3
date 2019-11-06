import React from 'react';
import './404.css';
import img from './404.gif';

export default class Notfound extends React.Component {
  render() {
    return (
      <div className="error404">
        <div className="info">
          <h1>404</h1>
          <h2>抱歉，您访问的页面不存在或已被删除！ (｡•ˇ‸ˇ•｡)</h2>
          {/* <div class="menu">
            <a href="#">首 页</a> | <a href="#">素材火</a> | <a href="#">jquery特效</a>
            | <a href="#">网站模板</a> | <a href="#">网站源码</a> | <a href="#">视频教程</a>
          </div> */}
        </div>
        <div className="pic">
          <img src={img} alt=" " />
        </div>
      </div>
    )
  }
}