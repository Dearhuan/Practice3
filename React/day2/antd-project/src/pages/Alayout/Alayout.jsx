import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Aheader from '../../components/Aheader/Aheader.jsx';
import Aupload from '../../components/Aupload/Aupload';
import Complaint from '../../components/Complaint/Complaint';
import Problem from '../../components/Problem/Problem';
import Weekly from '../../components/Weekly/Weekly';
import Exam from '../../components/Exam/Exam';
import Evaluate from '../../components/Evaluate/Evaluate';
import Inquiry from '../../components/Inquiry/Inquiry';
import Leave from '../../components/Leave/Leave';
import Discipline from '../../components/Discipline/Discipline';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class Alayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [{
        url: '/complaint',
        title: '匿名投诉'
      }, {
        url: '/problem',
        title: '技术问题'
      }, {
        url: '/upload',
        title: '项目上传'
      }, {
        url: '/stuvip',
        title: 'VIP'
      }, {
        url: '/weekly',
        title: '学员周报'
      }, {
        url: '/exam',
        title: '参加考试'
      }, {
        url: '/evaluate',
        title: '学员评价'
      }, {
        url: '/inquiry',
        title: '教学测评'
      }]
    }
  }
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
                        学员后台
              </span>
                    }
                  >
                    {
                      this.state.routes.map((item, index) => {
                        return (
                          <Menu.Item key={index + 1}>
                            <Link to={item.url}>{item.title}</Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="laptop" />
                        学员考勤
              </span>
                    }
                  >
                    <Menu.Item key="9">
                      <Link to="/leave">学员请假</Link>
                    </Menu.Item>
                    <Menu.Item key="10">
                      <Link to="/discipline">学员违纪</Link>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>学员后台</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <Switch>
                    <Route exact path='/' component={Complaint}></Route>
                    <Route path='/upload' component={Aupload}></Route>
                    <Route path='/complaint' component={Complaint}></Route>
                    <Route path='/problem' component={Problem}></Route>
                    <Route path='/stuvip' component={Problem}></Route>
                    <Route path='/weekly' component={Weekly}></Route>
                    <Route path='/exam' component={Exam}></Route>
                    <Route path='/evaluate' component={Evaluate}></Route>
                    <Route path='/inquiry' component={Inquiry}></Route>
                    <Route path='/leave' component={Leave}></Route>
                    <Route path='/discipline' component={Discipline}></Route>
                  </Switch>
                </Content>
              </Layout>
            </Router>
          </Layout>
        </Layout>
      </div>
    )
  }
}

