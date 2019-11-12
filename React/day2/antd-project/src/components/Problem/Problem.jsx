import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Table, message } from 'antd';
import getNowFormatDate from '../../utils/getFormatTime';

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
          title: '问题理由',
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
  // -------------------设置输入框-------------------
  handleInput(value) {
    this.setState({
      value
    })
    console.log(value)
  }

  submit() {
    let arr = ['暂无回复','ok,帅哥', '小哥哥今天好帅哦','有什么问题咱下回分解','收到,小哥哥', '好的,靓仔', '您的问题我们已经收到,会尽快处理', '你太可爱了！', '怎么又是小哥哥呀！'];
    let obj = {
      key: Date.now().toString(),
      name: this.props.username,
      reason: this.state.value,
      ctime: getNowFormatDate(Date.now()),
      answer: arr[Math.floor(Math.random() * arr.length)]
    };
    if (this.state.value) {
      this.setState({
        data: [...this.state.data, obj]
      });
      //触发dispatch方法，设置complains
      this.props.dispatch({
        type: 'set_problems',
        problems: [...this.state.data, obj]
      });
      this.state.value = ""
    } else {
      message.error('技术内容不能为空！');
    }
  }
  render() {
    return (
      <div>
        学生姓名：<Input placeholder={this.props.username} disabled />
        问题内容：<TextArea rows={4}
          placeholder="请输入技术内容"
          value={this.state.value}
          onChange={e => { this.handleInput(e.target.value) }}
        />
        <div className="ibtn">
          <Button type="primary" size={this.state.size} onClick={this.submit.bind(this)}>
            提交
        </Button>
          <Button size={this.state.size}>返回</Button>
        </div>

        <Table columns={this.state.columns} dataSource={this.props.problems} />

      </div>
    )
  }
})




