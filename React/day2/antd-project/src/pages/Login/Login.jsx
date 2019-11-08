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
                <Input  placeholder="身份证号码/学号" />
                <Icon type="user" />
              </div>
              <div className="inputbox">
                <Input  placeholder="密码" />
                <Icon type="lock" />
              </div>
              <div className="submit"><Button onClick={this.gotoIndex.bind(this)} type="primary" size={this.state.size}>
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
 
  gotoIndex = (e)=>{
    console.log(e);
    e.preventDefault();
  
  }
  getValue(e){
    console.log(e);
  }
}

export default Login