import React from 'react';
import { Input, Button } from 'antd';

const { TextArea } = Input;
//技术问题组件
export default () => {
  let size = 'large';
  return (
    <div>
      <Input placeholder="学生姓名" />
      <Input placeholder="请填写周报标题" />
      <TextArea rows={4}
        placeholder="请输入周报理由"
      />
      <Button type="primary" size={size}>
        提交
        </Button>
      <Button size={size}>返回</Button>
    </div>
  )
}




