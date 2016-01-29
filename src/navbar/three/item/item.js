import React, { Component } from 'react';
import styles from './item.css'
import classNames from 'classnames';

export default class Item extends Component {
  render() {
    return (
      <div className={styles.appNavbarItem}>
        {this.props.child}
      </div>
    );
  }
}
