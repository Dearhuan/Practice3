import React from 'react';
import { Carousel } from 'antd';
import './Banner.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Carousel autoplay>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    )
  }
}