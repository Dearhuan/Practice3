import React from 'react';
import { Input, Button, Icon } from 'antd';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'large',
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div id="container">
        <div className="b-box">
          <div className="login">
            <div className="top">
              <h1>学员后台系统</h1>
              <div className="inputbox">
                <Input value={this.state.username} onChange={e => { this.handleUser(e.target.value) }} placeholder="身份证号码/学号" />
                <Icon type="user" />
              </div>
              <div className="inputbox">
                <Input value={this.state.password} onChange={e => { this.handlePass(e.target.value) }} placeholder="密码" />
                <Icon type="lock" />
              </div>
              <div className="submit"><Button onClick={this.gotoIndex.bind(this, '/index')} type="primary" size={this.state.size}>
                提交
                </Button>
                <Icon type="key" />
              </div>
            </div>
            <div className="bot">
              学习总结入口
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleUser = (username) => {
    this.setState({
      username
    });
    console.log(username);
  }
  handlePass = (password) => {
    this.setState({
      password
    });
    console.log(password);
  }
  gotoIndex = (path) => {
    // console.log(e);
    console.log(this.state);
    const username = this.state.username;
    const password = this.state.password;
    if (!username || !password) {
      alert('请输入用户名和密码');
    } else if (username && password) {
      if (username == 'admin' && password == 'admin') {
        //跳转首页
        this.props.history.replace(path);
      }else{
        alert('用户名或密码错误')
      }
    }
  }
}

export default Login