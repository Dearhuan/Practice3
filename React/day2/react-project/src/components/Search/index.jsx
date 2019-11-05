import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    console.log('---------beforeCreated-------------')
    super(props)
    this.state = {
      searchText: '',
      isFocus: false
    }
    console.log('---------Created-------------')
  }
  componentWillMount() {
    console.log('---------componentWillMount-------------')
  }
  //   --------- 这里会有一次render--------------
  componentDidMount() {
    console.log('---------componentDidMount-------------')
  }
  componentWillUpdate() {
    console.log('---------componentWillUpdate-------------')
  }
  //   --------- 如果有数据更新，这里会有一次render--------------
  componentDidUpdate() {
    console.log('---------componentDidUpdate-------------')
  }
  componentWillUnmount() {
    console.log('---------componentWillUnmount-------------')
  }
  toggle(){
    this.setState({
      isFocus: !this.state.isFocus
    })
  }
  getInputValue(e){
    this.setState({
      searchText: e.target.value
    })
  }
  clear(){
    this.setState({
      searchText: ''
    })
  }
  render() {
    console.log('--------------render-----------')
    return (
      <div className={
        this.state.isFocus ? 'weui-search-bar weui-search-bar_focusing' : 'weui-search-bar'
      } id="searchBar">
        <form className="weui-search-bar__form">
          <div className="weui-search-bar__box">
            <i className="weui-icon-search"></i>
            <input value={this.state.searchText} onChange={this.getInputValue.bind(this)} type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
            <a onClick={this.clear.bind(this)} className="weui-icon-clear" id="searchClear"></a>
          </div>
          <label onClick={this.toggle.bind(this)} className="weui-search-bar__label" id="searchText">
            <i className="weui-icon-search"></i>
            <span>搜索</span>
          </label>
        </form>
        <a onClick={this.toggle.bind(this)} className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
      </div>
    )
  }
}