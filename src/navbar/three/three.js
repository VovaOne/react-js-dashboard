import React, { Component } from 'react';
import styles from './three.css'
import classNames from 'classnames';
import Item from './item/item'
import Link from './../link/link'

export default class Three extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    var openCloseIcon;
    var appNavbarThreeStyle;
    if(this.state.isOpen) {
      openCloseIcon = <span className="glyphicon glyphicon-chevron-up app-navbar-three-open-ic"></span>
      appNavbarThreeStyle = styles.appNavbarThreeStyleOpened
    } else {
      openCloseIcon = <span className="glyphicon glyphicon-chevron-down app-navbar-three-open-ic"></span>
      appNavbarThreeStyle = styles.appNavbarThreeStyleClosed
    }

    return (
      <div className={appNavbarThreeStyle}>
        <Item child={<div onClick={this.toggle}>
        <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
        <span className="app-navbar-three-name ">Three</span>
        {openCloseIcon}</div>}/>

        {this.state.isOpen ?
          <div>
            <Item child={<div>
            <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
            <span className="test-three-child-margin">Blank Page</span>
          </div>}/>

            <Item child={<div>
          <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
          <span className="test-three-child-margin">Blank Page</span>
          </div>}/>

            <Item child={<div>
          <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
          <span className="test-three-child-margin">Blank Page</span>
          </div>}/>

          </div>
          :
          null
        }


      </div>
    );
  }
}
