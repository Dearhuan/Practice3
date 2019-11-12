import React from 'react';
import { connect } from 'react-redux';
import getNowFormatDate from '../../utils/getFormatTime';
import { Input, Button, Table, message } from 'antd';

const { TextArea } = Input;
//技术问题组件
export default connect(state=>{
  return state;
})(class Problem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'large',
      value: '',
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
        // {
        //   key: '1',
        //   name: 'hello',
        //   reason: 'xxxxxxxxxxxx',
        //   ctime: '2019-11-10',
        //   answer: 'ok',
        // }
      ]
    }
  }
  render() {
    return (
      <div>
        学生姓名：<Input placeholder={this.props.username} disabled />
        申请理由：<TextArea rows={4}
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
})




