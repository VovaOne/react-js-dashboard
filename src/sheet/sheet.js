import React, { Component } from 'react';
import styles from './sheet.css';
import Table from './../table/table';


export default class Sheet extends Component {


  render() {
    return (
      <div className={styles.sheet}>
        <Table
          columns={[{
              name: 'Name',
              data: 'name',
              type: 'text',
              width: 200,
              filter: {type: 'text'}
            },{
              name: 'Age',
              data: 'age',
              type: 'text',
              width: 100,
              filter: {type: 'number'}
            },{
              name: 'Phone',
              data: 'phone',
              type: 'text',
              width: 100,
              filter: {type: 'text'}
            },{
              name: 'Photo',
              data: 'photo',
              type: 'image',
              width: 100
            }
          ]}
          data={[{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 1
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 2
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 3
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 4
          }]}
        />
      </div>
    );
  }
}
