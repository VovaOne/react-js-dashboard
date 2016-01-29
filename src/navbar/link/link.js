import React, { Component } from 'react';
import styles from './link.css'
import classNames from 'classnames';

export default class Link extends Component {
  render() {
    return (
      <div className={styles.appNavbarLink}>
        <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
        <span className={styles.appNavbarLinkName}>Blank Page</span>
      </div>
    );
  }
}
