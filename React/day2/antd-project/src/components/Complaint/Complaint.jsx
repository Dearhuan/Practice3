import { Input, Button, Radio, Icon } from 'antd';

import React from 'react';

const { TextArea } = Input;

//匿名投诉组件
export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      size: 'large',
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
        <div style={{ margin: '24px 0' }} />
        <TextArea
          value={value}
          onChange={this.onChange}
          placeholder="本投诉是匿名投诉，不会暴露您的信息"
          autoSize={{ minRows: 8, maxRows: 16 }}
        />
        <Button type="primary" size={size}>
          提交
        </Button>
        <Button size={size}>返回</Button>
      </div>
    );
  }
}





