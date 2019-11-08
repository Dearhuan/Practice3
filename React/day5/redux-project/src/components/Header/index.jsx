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
export default connect(state => {
  return state;
})(class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'header',
      inputValue: ''
    }
  }
  render() {
    return (
      <div>
        hello,this is react-redux demo
        <p>{this.props.name}</p>
        <ul>
          {this.props.likes.map((item, index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
        <input type="text" value={this.state.inputValue} onChange={this.setStoreName.bind(this)} />
      </div>
    )
  }
  setStoreName(e) {
    this.setState({
      inputValue: e.target.value
    })
    this.props.dispatch({
      type: 'set_name',
      name: e.target.value
    })
  }
})