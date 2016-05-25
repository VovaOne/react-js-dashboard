import React, { Component } from 'react';
import styles from './table.css';
import Header from './header/header'
import Row from './row/row'

/*

 <Table
 columns={[{
 name: 'Name',
 data: 'name',
 type: 'text',
 width: 200,
 filter: {}
 },{
 name: 'Phone',
 data: 'phone',
 type: 'text',
 width: 100,
 filter: {}
 },{
 name: 'Photo',
 data: 'photo',
 type: 'image',
 width: 100,
 filter: {}
 }
 ]}
 data={[{
 name: "Cassie",
 phone: "9876 532 432",
 photo: "images/check.gif"
 },{
 name: "Cassie",
 phone: "9876 532 432",
 photo: "images/check.gif"
 },{
 name: "Cassie",
 phone: "9876 532 432",
 photo: "images/check.gif"
 },{
 name: "Cassie",
 phone: "9876 532 432",
 photo: "images/check.gif"
 }]}
 />

 */
export default class Table extends Component {

  static propTypes:{
    columns: React.PropTypes.array,
    data: React.PropTypes.array
    };


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.sheet}>
        <div className={styles.table}>
          <Header columns={this.props.columns}/>
          {this.props.data.map((rowData)=>{
            return <Row data={rowData} columns={this.props.columns}/>
          })}
        </div>
      </div>
    );
  }
}
