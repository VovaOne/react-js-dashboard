import React, { Component } from 'react';
import styles from './toolbar.css'
import classNames from 'classnames';

export default class ToolBar extends Component {

  onHamburgerClick = () => {
    if(this.props.onHamburgerClick) this.props.onHamburgerClick();
  };

  render() {
    return (
      <nav
        className={classNames("navbar", styles.toolbar, "toolbar-theme")}>

        <button type="button" className={classNames(styles.hamburgerBtn)} onClick={this.onHamburgerClick}>
          <span className="glyphicon glyphicon-menu-hamburger"></span>
        </button>

        <button type="button" className={classNames(styles.hamburgerBtn,"pull-right")}>
          <span className="glyphicon glyphicon-search"></span>
        </button>

      </nav>
    );
  }
}