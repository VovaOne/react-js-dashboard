import React, { Component } from 'react';
import headerStyles from './header.css';
import tableStyles from '../table.css';
import clickOutside from '../../click-outside';
import classNames from 'classnames';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={classNames(tableStyles.tableRow)}>
        {this.props.children}
      </div>
    );
  }
}
