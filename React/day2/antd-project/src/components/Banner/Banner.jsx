import React from 'react';
import { Carousel } from 'antd';
import './Banner.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [{
        title: 'banner1'
      },
      {
        title: 'banner2'
      },
      {
        title: 'banner3'
      },
      {
        title: 'banner4'
      },
      {
        title: 'banner5'
      },]
    }
  }
  render() {
    return (
      <Carousel autoplay>
        {/* <div>
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
        </div> */}
        {
          this.state.banners.map((item, index) => {
            return (
              <div key={index+1}>
                <h3>{item.title}</h3>
              </div>
            )
          })
        }
      </Carousel>
    )
  }
}