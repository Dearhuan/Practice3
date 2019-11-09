import { Input, Button, Table } from 'antd';

import React from 'react';

const { TextArea } = Input;

//匿名投诉组件
export default class Demo extends React.Component {
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
          title: '是否撤销',
          key: 'cancel',
          dataIndex: 'cancel',
        }
      ],
      data: [
        {
          key: '1',
          name: 'hello',
          reason: 'xxxxxxxxxxxx',
          ctime: '2019-11-10',
          cancel: '否',
        },
        {
          key: '1',
          name: 'hello',
          reason: 'xxxxxxxxxxxx',
          ctime: '2019-11-10',
          cancel: '否',
        }
      ]
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { value } = this.state;
    const { size } = this.state;

    return (
      <div>
        <div style={{ margin: '0px 0' }} />
        投诉内容：<TextArea
          value={value}
          onChange={this.onChange}
          placeholder="本投诉是匿名投诉，不会暴露您的信息"
          autoSize={{ minRows: 8, maxRows: 16 }}
        />
        <div className="ibtn">
          <Button type="primary" size={size}>
            提交
        </Button>
          <Button size={size}>返回</Button>
        </div>

        <Table columns={this.state.columns} dataSource={this.state.data} />

      </div>
    );
  }
}





