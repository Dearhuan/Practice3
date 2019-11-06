import React from 'react';
import './Aheader.css';
import logo from '../../assets/logo.png';
import { Menu, Icon } from 'antd';


export default class Aheader extends React.Component {


  render() {
    return (
      <div className="navbar navbar-default" id="navbar">>
      	<div className="navbar-container" id="navbar-container">
          <div className="navbar-header pull-left">
            <a href="/student.php" className="navbar-brand">
              <small>
                <img src={logo} />
              </small>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
