import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
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
import Vip from '../../components/Vip/Vip';

const { SubMenu } = Menu;
// const { Content, Sider } = Layout;
const { Header, Content, Footer, Sider } = Layout;

export default connect(state => {
  return state;
})(class Alayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      stuAdmin: [{
        url: '/index/complaint',
        title: '匿名投诉'
      }, {
        url: '/index/problem',
        title: '技术问题'
      }, {
        url: '/index/upload',
        title: '项目上传'
      }, {
        url: '/index/stuvip',
        title: 'VIP'
      }, {
        url: '/index/weekly',
        title: '学员周报'
      }, {
        url: '/index/exam',
        title: '参加考试'
      }, {
        url: '/index/evaluate',
        title: '学员评价'
      }, {
        url: '/index/inquiry',
        title: '教学测评'
      }],
      stuCheck: [{
        url: '/index/leave',
        title: '学员请假'
      }, {
        url: '/index/discipline',
        title: '学员违纪'
      }]
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <div>
        <Layout>
          <Aheader />
          <Layout>
            <Router>
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                {/* <div className="logo" /> */}
                <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        <span>学员后台</span>
                      </span>
                    }
                  >
                    {
                      this.state.stuAdmin.map((item, index) => {
                        return (
                          <Menu.Item key={index}>
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
                        <Icon type="team" />
                        <span>学员考勤</span>
                      </span>
                    }
                  >
                    {
                      this.state.stuCheck.map((item, index) => {
                        return (
                          <Menu.Item key={item.title}>
                            <Link to={item.url}>{item.title}</Link>
                          </Menu.Item>
                        )
                      })
                    }
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
                    <Route exact path='/index' component={Complaint}></Route>
                    <Route path='/index/upload' component={Aupload}></Route>
                    <Route path='/index/complaint' component={Complaint}></Route>
                    <Route path='/index/problem' component={Problem}></Route>
                    <Route path='/index/stuvip' component={Vip}></Route>
                    <Route path='/index/weekly' component={Weekly}></Route>
                    <Route path='/index/exam' component={Exam}></Route>
                    <Route path='/index/evaluate' component={Evaluate}></Route>
                    <Route path='/index/inquiry' component={Inquiry}></Route>
                    <Route path='/index/leave' component={Leave}></Route>
                    <Route path='/index/discipline' component={Discipline}></Route>
                  </Switch>

                </Content>
              </Layout>
            </Router>
          </Layout>
        </Layout>
      </div>
    )
  }
})

