import React from 'react';
import { Table, Divider, Tag } from 'antd';

export default class Discipline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '扣除(分数)',
          dataIndex: 'dscore',
          key: 'dscore',
        },
        {
          title: '剩余分数',
          key: 'score',
          dataIndex: 'score',
        },
        {
          title: '理由',
          dataIndex: 'reason',
          key: 'reason'
        },
        {
          title: '操作人',
          dataIndex: 'fixer',
          key: 'fixer'
        },
        {
          title: '操作时间',
          dataIndex: 'fixtime',
          key: 'fixtime'
        },
      ],
      data: [{
        key: '1',
        name: 'John Brown',
        type: 'A',
        dscore: 0,
        score: 100,
        reason: 'to do something',
        fixer: 'James',
        fixtime: '9120-9-9'
      },
      {
        key: '2',
        name: 'Jim Green',
        type: 'A',
        dscore: 0,
        score: 100,
        reason: 'to do something',
        fixer: 'James',
        fixtime: '9120-9-9'  
      },
      {
        key: '3',
        name: 'Joe Black',
        type: 'A',
        dscore: 0,
        score: 100,
        reason: 'to do something',
        fixer: 'James',
        fixtime: '9120-9-9'
      }]
    }
  }
  render(){
    return (
      <Table columns = { this.state.columns } dataSource = { this.state.data } />
    )
  }
}

