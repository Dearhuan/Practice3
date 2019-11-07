import React ,{Component} from 'react'
import Counter from './Counter'
import Summary from './Summary'
const style = {
  margin: '20px'
}

export default class ControlPanel extends Component{
  render(){
    return(
      <div style={style}>
        <Counter caption="First"/>
        <Counter caption="Second"/>
        <Counter caption="Third"/>
        <hr/>
        <Summary/>
      </div>
    )
  }
}