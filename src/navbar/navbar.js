import React, { Component } from 'react';
import styles from './navbar.css'
import classNames from 'classnames';
import Link from './link/link';
import Three from './three/three';

export default class NavBar extends Component {

  render() {
    return (
      <div className='app-navbar'>
        <Link/>
        <Three/>
        <Link/>
        <Three/>
        <Three/>
        <Three/>
      </div>
    );
  }
}
