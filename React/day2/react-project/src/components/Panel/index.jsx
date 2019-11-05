import React from 'react';
import axios from 'axios';

export default class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      page: 1,
      isLoading: false
    }
  }
  UNSAFE_componentWillMount() {
    //挂载前
    this.loadMore()
  }
  async loadMore() {
    this.setState({
      isLoading: true,
    })
    let data = await axios.get('https://cnodejs.org/api/v1/topics', {
      params: {
        page: this.state.page,
        tab: 'ask',
        limit: 10,
        mdrender: true
      }
    })
    console.log(data.data.data)
    this.setState({
      isLoading: false,
      page: ++this.state.page,
      news: [...this.state.news, ...data.data.data]
    })
  }
  render() {
    return (
      <div className="weui-panel weui-panel_access">
        <div className="weui-panel__bd">
          {
            this.state.news.map((item, index) => {
              return (
                <a key={index} className="weui-media-box weui-media-box_appmsg">
                  <div className="weui-media-box__hd">
                    <img className="weui-media-box__thumb" src={item.author.avatar_url} alt="" />
                  </div>
                  <div className="weui-media-box__bd">
                    <h4 className="weui-media-box__title">{item.title}</h4>
                    <p className="weui-media-box__desc">{item.author.loginname}</p>
                  </div>
                </a>
              )
            })
          }
        </div>
        <div onClick={this.loadMore.bind(this)} className="weui-panel__ft">
          <a className="weui-cell weui-cell_access weui-cell_link">
            <div className="weui-cell__bd">查看更多</div>
            <span className="weui-cell__ft"></span>
          </a>
        </div>
      </div>
    )
  }
}