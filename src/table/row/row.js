import React, { Component } from 'react';
import rowStyles from './row.css';
import tableStyles from '../table.css';


export default class Row extends Component {

  render() {
    return (
      <div className={rowStyles.tableRow}>
        <div className={rowStyles.tableCell}>Cassie</div>
        <div className={rowStyles.tableCell}><a href="tel:9876532432">9876 532 432</a></div>
        <div className={rowStyles.tableCell}><img src="images/check.gif" alt="checked"/></div>
      </div>
    );
  }
}
