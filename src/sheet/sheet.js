import React, { Component } from 'react';
import styles from './sheet.css';
import Table from './../table/table';


export default class Sheet extends Component {


  render() {
    return (
      <div className={styles.sheet}>
        <Table/>
      </div>
    );
  }
}
