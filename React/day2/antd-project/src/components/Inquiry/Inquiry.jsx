import React from 'react';
import {  Table, Divider, Tag } from 'antd';

export default class Inquiry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          title: '开始时间',
          dataIndex: 'btime',
          key: 'btime',
          render: text => <a>{text}</a>,
        },
        {
          title: '结束时间',
          dataIndex: 'etime',
          key: 'etime',
        },
        {
          title: '评价名称',
          dataIndex: 'comname',
          key: 'comname',
        },
        {
          title: '讲师',
          key: 'teacher',
          dataIndex: 'teacher',
        },
        {
          title: '操作',
          key: 'fix',
          dataIndex: 'fix'
        },
      ],
      data: [
        {
          key: '1',
          btime: '2019-11-04',
          etime: '2019-11-06',
          comname: '第三阶段第十六周测评',
          teacher: '姚嘉隆',
          fix: '已填写',
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Table columns = { this.state.columns } dataSource = { this.state.data } />
      </div>
    )
  }
}

