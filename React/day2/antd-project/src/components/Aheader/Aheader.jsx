import React from 'react';
import './Aheader.css';
import { Icon } from 'antd';
import logo from '../../assets/logo.png';

export default class Aheader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'hello',
      bool: false,
    }
  }
  toggle() {
    //点击切换bool的值
    this.setState({
      bool: !this.state.bool,
    })
    console.log('click')
  }
  logout = (path) =>{
    console.log(path);
    console.log(this.props);
    window.location.href = '/'
    // this.props.history.replace(path);
  }
  render() {
    return (
      <div className="navbar navbar-default" id="navbar">
      	<div className="navbar-container" id="navbar-container">
          <div className="navbar-header pull-left">
            <a href="/#index" className="navbar-brand">
              <small>
                <img src={logo} />
              </small>
            </a>
          </div>

          <div className="right-box">
            <div onClick={this.toggle.bind(this)} className="user">
              <span>{this.state.username}</span>
              <Icon type={this.state.bool ? 'caret-up' : 'caret-down'} />
            </div>
            <div style={{ display: this.state.bool ? 'block' : 'none' }} onClick={this.logout.bind(this, '/')} id="logout">
              <div  className="logout">
                <Icon type="poweroff" />
                <span>退出</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
