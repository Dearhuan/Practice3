import { Input, Button, Table } from 'antd';

import React from 'react';
import { connect } from 'react-redux';

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
          dataIndex: 'cancel',
        }
      ],
      data: [
        // {
        //   key: Date.now().toString(),
        //   name: 'hello',
        //   reason: 'xxxxxxxxxxxx',
        //   ctime: '2019-11-10',
        //   cancel: '删除',
        // }
      ]
    }
  }
  handleInput(value) {
    this.setState({
      value
    })
    console.log(value)
  }
  submit(){
    let obj = {
      key: Date.now().toString(),
      name: this.props.username,
      reason: this.state.value,
      ctime: this.getNowFormatDate(Date.now()),
      cancel: '删除'
    };
    console.log(JSON.parse(JSON.stringify(obj)));
    this.state.value = '';
    this.setState({
      data: [...this.state.data,obj]
    });
  }
  back(){
    this.state.value = '';
  }
  getNowFormatDate(microtime) {
    var date = new Date(microtime)
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    var strHour = date.getHours()
    var strMinute = date.getMinutes()
    var strSeconds = date.getSeconds()
    if (month >= 1 && month <= 9) {
        month = `0${month}`
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = `0${strDate}`
    }
    if (strHour >= 0 && strHour <= 9) {
        strHour = `0${strHour}`
    }
    if (strMinute >= 0 && strMinute <= 9) {
        strMinute = `0${strMinute}`
    }
    if (strSeconds >= 0 && strSeconds <= 9) {
        strSeconds = `0${strSeconds}`
    }
    var currentdate = `${date.getFullYear()}-${month }-${strDate} ${strHour}:${strMinute}:${strSeconds}`
    return currentdate
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

        <Table columns={this.state.columns} dataSource={this.state.data} />

      </div>
    );
  }
})





