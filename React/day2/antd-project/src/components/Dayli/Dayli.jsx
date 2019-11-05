import React from 'react';
import { Calendar } from 'antd';

// function onPanelChange(value, mode) {
//   console.log(value, mode);
// }

// ReactDOM.render(<Calendar onPanelChange={onPanelChange} />, mountNode);


export default class Dayli extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Calendar />
    )
  }
}