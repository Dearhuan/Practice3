import React from 'react'
import { connect } from 'react-redux'

//从react-redux中引入connect，通过connect()()，得到props，porps中包含store中的state数据和dispatch()方法
/* {
  "name": "hello",
  "likes": [
    "ball",
    "music",
    "sleep"
  ],
  "dispatch": "dispatch()"
} */
export default connect(state=>{
  return state
})(class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'footer'
    }
  }
  render(){
    return(
      <div>this is Footer: {this.props.name}</div>
    )
  }
})