import React, { Component } from 'react';
import styles from './table.css';
import Header from './header/header'
import Row from './row/row'
import CellHeader from './header/cell/cell'
import classnames from 'classnames'
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
 photo: "images/check.gif",
 id: 1
 },{
 name: "Cassie",
 phone: "9876 532 432",
 photo: "images/check.gif",
 id: 2
 },{
 name: "Cassie",
 phone: "9876 532 432",
 photo: "images/check.gif",
 id: 3
 },{
 name: "Cassie",
 phone: "9876 532 432",
 photo: "images/check.gif",
 id: 4
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
    this.size = 20;
  }

  render() {
    return (
      <div className={styles.sheet}>
        <div className={styles.table}>
          <Header>
            {this.props.columns.map((column, index)=> {
              return <CellHeader key={index} headerName={column.name} width={20}/>
            })}
          </Header>
          {this.props.data.map((rowData)=> {
            return <Row key={rowData.id} data={rowData} columns={this.props.columns}/>
          })}
        </div>
      </div>
    );
  }
}
