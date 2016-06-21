import React, { Component } from 'react';
import styles from './navbar.css'
import classNames from 'classnames';
import Link from './link/link';
import Three from './three/three';

import { Scrollbars } from 'react-custom-scrollbars';

export default class NavBar extends Component {

  render() {
    return (
      <div className='app-navbar'>
        <Scrollbars
          autoHide={true}>
          <Link/>
          <Three/>
          <Link/>
          <Three/>
          <Three/>
          <Three/>
        </Scrollbars>
      </div>
    );
  }
}
