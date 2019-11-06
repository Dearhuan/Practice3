import React from 'react';
import { Icon, Table, Divider, Tag } from 'antd';
import './Evaluate.css';

export default class Evaluate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          title: '测评开始时间',
          dataIndex: 'btime',
          key: 'btime',
          render: text => <a>{text}</a>,
        },
        {
          title: '测评结束时间',
          dataIndex: 'etime',
          key: 'etime',
        },
        {
          title: '评价对象',
          dataIndex: 'comobj',
          key: 'comobj',
        },
        {
          title: '讲师',
          key: 'teacher',
          dataIndex: 'teacher',
        },
        {
          title: '班主任',
          key: 'bteacher',
          dataIndex: 'bteacher'
        },
        {
          title: '就业老师',
          key: 'wteacher',
          dataIndex: 'wteacher'
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
          btime: '2019-11-06 12:00:00	',
          etime: '2019-11-10 18:35:00	',
          comobj: '讲师【94.74%】',
          teacher: '姚嘉隆',
          bteacher: '宝莹姐',
          wteacher: '罗姐',
          fix: '开始评价',
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <div className="title">
          <Icon type="check" />
          您的满意是对我们最好的评价，您的批评是给我们最大的改进动力，欢迎同学对千锋提出宝贵的批评和建议。
        </div>
        <Table columns = { this.state.columns } dataSource = { this.state.data } />
       
      </div>
    )
  }
}

