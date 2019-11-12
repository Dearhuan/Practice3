import { createStore } from 'redux';

//通过redux的createStore方法创建一个store，定义初始化数据和action动作
export default createStore((state = {
  username: '',
  complaints: [],
  problems: []
}, action) => {
  switch (action.type) {
    case "set_user":
      return {
        ...state,
        username: action.username
      }
    case "set_complaints":
      return {
        ...state,
        complaints: action.complaints
      }
    case "set_problems":
      return {
        ...state,
        problems: action.problems
      }
    default:
      return state
  }
})