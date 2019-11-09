import {createStore} from 'redux';

//通过redux的createStore方法创建一个store，定义初始化数据和action动作
export default createStore((state = {
  username: '',
  password: ''
},action) =>{
  switch(action.type){
    case "set_user":
      return{
        ...state,
        username: action.username,
        password: action.password
      }
    default:
      return state
  }
})