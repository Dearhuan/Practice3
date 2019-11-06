import React from 'react';
import './Exam.css';

export default class Exam extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <div>
        <h2>考试列表</h2>
        <div className="brbox"></div>
        <div className="box">
          <ul>
            <li>
              <h2>第XX周XXOO考试</h2>
              <p>100分</p>
            </li>
            <li>
              <h2>第XX周XXOO考试</h2>
              <p>100分</p>
            </li>
            <li>
              <h2>第XX周XXOO考试</h2>
              <p>100分</p>
            </li>
            <li>
              <h2>第XX周XXOO考试</h2>
              <p>100分</p>
            </li>
            <li>
              <h2>第XX周XXOO考试</h2>
              <p>100分</p>
            </li>
            <li>
              <h2>第XX周XXOO考试</h2>
              <p>100分</p>
            </li>
            <li>
              <h2>第XX周XXOO考试</h2>
              <p>100分</p>
            </li>
            <li>
              <h2>第XX周XXOO考试</h2>
              <p>100分</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}