import React from 'react';
import { Input, Button, Table } from 'antd';

const { TextArea } = Input;
//技术问题组件
export default class Problem extends React.Component {
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
          title: '申请理由',
          dataIndex: 'reason',
          key: 'reason',
        },
        {
          title: '创建时间',
          dataIndex: 'ctime',
          key: 'ctime',
        },
        {
          title: '回复',
          key: 'answer',
          dataIndex: 'answer',
        }
      ],
      data: [
        {
          key: '1',
          name: 'hello',
          reason: 'xxxxxxxxxxxx',
          ctime: '2019-11-10',
          answer: 'ok',
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Input placeholder="Basic usage" />
        <TextArea rows={4}
          placeholder="请输入申请理由"
        />
        <div className="ibtn">
          <Button type="primary" size={this.state.size}>
            提交
        </Button>
          <Button size={this.state.size}>返回</Button>
        </div>

        <Table columns={this.state.columns} dataSource={this.state.data} />

      </div>
    )
  }
}




