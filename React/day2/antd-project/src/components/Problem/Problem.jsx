import React from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;
//技术问题组件
export default () => {
  let size = 'large';
  return (
    <div>
      <Input placeholder="Basic usage" />
      <TextArea rows={4}
        placeholder="请输入技术内容"
      />
      <Button type="primary" size={size}>
        提交
        </Button>
      <Button size={size}>返回</Button>
    </div>
  )
}




