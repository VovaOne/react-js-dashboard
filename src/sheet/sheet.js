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
              width: {flex: 4},
              display: true,
              filter: {type: 'text'}
            },{
              name: 'Age',
              data: 'age',
              type: 'text',
              width: {flex: 1},
              filter: {type: 'number'}
            },{
              name: 'Phone',
              data: 'phone',
              type: 'text',
              width: {flex: 4},
              filter: {type: 'text'}
            },{
              name: 'Photo',
              data: 'photo',
              type: 'image',
              width: {px: 200}
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
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 5
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 6
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 7
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 8
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 9
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 10
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 11
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 12
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 13
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 14
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 15
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 16
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 17
          },{
            name: "Cassie",
            age: 25,
            phone: "9876 532 432",
            photo: "images/check.gif",
            id: 18
          }]}
        />
      </div>
    );
  }
}
