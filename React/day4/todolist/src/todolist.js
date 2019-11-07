import React from 'react';
import { Button, Input, List } from 'antd';
import store from './store/index'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnCLick = this.handleBtnCLick.bind(this);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div style={{ marginLeft: '10px' }}>
        <Input
          value={this.state.inputValue}
          style={{ width: '300px', marginTop: '10px' }}
          placeholder="请输入内容"
          onChange={this.handleInputChange}
        />
        <Button
          type="primary"
          onClick={this.handleBtnCLick}
        >提交</Button>
        <List
          style={{ width: '300px', marginTop: '10px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleDeleteItem.bind(this, index)}>{item}</List.Item>}
        />
      </div>
    )
  }
  handleInputChange(e) {
    const action = {
      type: 'input_change',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleBtnCLick() {
    //点击提交时，设置action的type为'add_item',通过store的dispatch()方法触发action
    const action = {
      type: 'add_item',
    }
    store.dispatch(action);
  }
  handleDeleteItem(index) {
    //删除某一项时给store传递该项的索引，便于之后从数组中移除
    const action = {
      type: 'delete_item',
      index: index
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
}