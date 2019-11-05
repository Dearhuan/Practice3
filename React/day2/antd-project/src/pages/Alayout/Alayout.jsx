import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Aheader from '../../components/Aheader/Aheader';
import Atable from '../../components/Atable/Atable';
import Banner from '../../components/Banner/Banner';
import Dayli from '../../components/Dayli/Dayli';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Alayout extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Aheader />
          <Layout>
            <Router>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        subnav 1
              </span>
                    }
                  >
                    <Menu.Item key="1">
                      <Link to='/option1'>option1</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to='/option2'>option2</Link>
                      </Menu.Item>
                    <Menu.Item key="3">
                    <Link to='/option3'>option3</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                    <Link to='/option4'>option4</Link>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="laptop" />
                        subnav 2
              </span>
                    }
                  >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="notification" />
                        subnav 3
              </span>
                    }
                  >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <Route exact path='/' component={Atable}></Route>
                  <Route path='/option1' component={Atable}></Route>
                  <Route path='/option2' component={Banner}></Route>
                  <Route path='/option3' component={Dayli}></Route>
                  <Route path='/option4' component={Option4}></Route>
                </Content>
              </Layout>
            </Router>
          </Layout>
        </Layout>
      </div>
    )
  }
}

class Option1 extends Component{
  render(){
    return(
      <h1>hello option1</h1>
    )
  }
}

// class Option2 extends Component{
//   render(){
//     return(
//       <h1>hello option2</h1>
//     )
//   }
// }

// class Option3 extends Component{
//   render(){
//     return(
//       <h1>hello option3</h1>
//     )
//   }
// }

class Option4 extends Component{
  render(){
    return(
      <h1>hello option4</h1>
    )
  }
}