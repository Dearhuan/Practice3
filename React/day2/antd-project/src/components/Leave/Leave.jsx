import React from 'react';
import { Input, Button, DatePicker, Table } from 'antd';

const { TextArea } = Input;
const { RangePicker, MonthPicker } = DatePicker;

export default class Leave extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'large',
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '请假理由',
          dataIndex: 'reason',
          key: 'reason',
        },
        {
          title: '班主任审批',
          dataIndex: 'btecher',
          key: 'btecher',
        },
        {
          title: '讲师审批',
          key: 'teacher',
          dataIndex: 'teacher',
        },
        {
          title: '请假时间',
          dataIndex: 'qtime',
          key: 'qtime'
        },
        {
          title: '创建时间',
          dataIndex: 'ctime',
          key: 'ctime'
        },
      ],
      data: [{
        key: '1',
        name: 'John Brown',
        reason: 'A',
        bteacher: 0,
        teacher: 100,
        reason: 'to do something',
        qtime: 'James',
        ctime: '9120-9-9'
      },
      {
        key: '2',
        name: 'Jim Green',
        reason: 'A',
        bteacher: 0,
        teacher: 100,
        reason: 'to do something',
        qtime: 'James',
        ctime: '9120-9-9'  
      },
      {
        key: '3',
        name: 'Joe Black',
        reason: 'A',
        bteacher: 0,
        teacher: 100,
        reason: 'to do something',
        qtime: 'James',
        ctime: '9120-9-9'
      }]
    }
  }
  render() {
    return (
      <div>
        学生姓名：<Input placeholder="学生姓名" />
        请假理由：<TextArea rows={4}
          placeholder="请输入请假理由"
        />
        <div>  
        请假时间：<RangePicker renderExtraFooter={() => 'extra footer'} showTime />
        </div>
        <div className="ibtn">
          <Button type="primary" size={this.state.size}>
            提交
        </Button>
          <Button size={this.state.size}>返回</Button>
        </div>
        <Table columns = { this.state.columns } dataSource = { this.state.data } />
      </div>
    )
  }
}
