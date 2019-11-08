import { createStore } from 'redux'

//通过redux的createStore方法创建一个store，定义初始化数据和action动作
export default createStore((state = {
  name: 'hello',
  likes: ['ball', 'music', 'sleep']
}, action) => {
  switch (action.type) {
    case "set_name":
      return {
        ...state,
        name: action.name
      }
    default:
      return state
  }
})