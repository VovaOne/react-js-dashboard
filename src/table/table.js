import React, { Component } from 'react';
import styles from './table.css';
import Header from './header/header'
import Row from './row/row'


export default class Table extends Component {

  columns;
  data;

  render() {
    return (
      <div className={styles.sheet}>
        <div className={styles.table}>
          <Header/>
          <Row/>
          <Row/>
        </div>
      </div>
    );
  }
}
