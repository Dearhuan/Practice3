import { Input, Button, Table, message } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import getNowFormatDate from '../../utils/getFormatTime';

const { TextArea } = Input;

//匿名投诉组件
export default connect(state => { return state })(class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      size: 'large',
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
          title: '是否删除',
          key: 'cancel',
          // dataIndex: 'cancel',
          render: (text) =>
            <span>
              <a onClick={this.removeitem.bind(this)}>删除</a>
            </span>
        }
      ],
      data: [
        // {
        //   key: Date.now().toString(),
        //   name: 'hello',
        //   reason: 'xxxxxxxxxxxx',
        //   ctime: '2019-11-10',
        // }
      ]
    }
  }
  // -------------------设置输入框-------------------
  handleInput(value) {
    this.setState({
      value
    })
    console.log(value.trim())
  }
  // ---------------------提交-------------------------
  submit() {
    let obj = {
      key: Date.now().toString(),
      name: this.props.username,
      reason: this.state.value.trim(),
      ctime: getNowFormatDate(Date.now())
    };
    // console.log(JSON.parse(JSON.stringify(obj)));
    // console.log(this.state.value);
    // this.state.value = '';
    if (this.state.value.trim()) {
      this.setState({
        data: [...this.state.data, obj]
      });
      //触发dispatch方法，设置complains
      this.props.dispatch({
        type: 'set_complaints',
        complaints: [...this.state.data, obj]
      });
      this.state.value = '';
    } else {
      message.error('投诉内容不能为空！');
    }
  }
  // ----------------------返回----------------------
  back() {
    this.state.value = '';
  }
  // ---------------------删除该项---------------------
  removeitem(record, rowKey) {
    // console.log(record);
    console.log(rowKey);
    let old = this.state.data;
    old.splice(rowKey, 1)
    this.setState({
      data: old
    });
    this.props.complaints.splice(rowKey,1)
  }
  // --------------------组件挂载后--------------------
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div style={{ margin: '0px 0' }} />
        投诉内容：<TextArea
          value={this.state.value}
          onChange={e => { this.handleInput(e.target.value) }}
          placeholder="本投诉是匿名投诉，不会暴露您的信息"
          autoSize={{ minRows: 8, maxRows: 16 }}
        />
        <div className="ibtn">
          <Button type="primary" onClick={this.submit.bind(this)} size={this.state.size}>
            提交
        </Button>
          <Button size={this.state.size} onClick={this.back.bind(this)}>返回</Button>
        </div>

        <Table columns={this.state.columns} dataSource={this.props.complaints}
          onRow={(record, rowKey) => {
            return {
              onClick: this.removeitem.bind(this, record, rowKey)
            }
          }}
        />

      </div>
    );
  }
})





