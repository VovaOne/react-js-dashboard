import React, { Component } from 'react';
import styles from './sheet.css';
import Select from './../select/select';


export default class Sheet extends Component {


  render() {
    return (
      <div className={styles.sheet2}>
        <Select items={['one','two','three']}/>
        <Select items={['one','two','three','4','5','6','7','8','9']}/>
      </div>
    );
  }
}
