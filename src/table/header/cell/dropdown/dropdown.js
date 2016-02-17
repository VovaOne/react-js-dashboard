import React, { Component } from 'react';
import styles from './dropdown.css'


export default class DropDown extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={styles.dropdown}>
        <p className={styles.dropdownItem}>Sort one</p>
        <p className={styles.dropdownItem}>Sort two</p>

        <div className={styles.columsItem}>
          <span>Colums</span>
          <div className={styles.dropdownColums}>
            <p>Hello World!</p>
          </div>
        </div>

      </div>
    );
  }
}
