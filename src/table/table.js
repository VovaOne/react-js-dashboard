import React, { Component } from 'react';
import styles from './table.css';
import Header from './header/header'
import Row from './row/row'
import CellHeader from './header/cell/cell-header'
import classnames from 'classnames'
/*

 <Table
 columns={[{
 name: 'Name',
 data: 'name',
 type: 'text',
 width: 200,
 filter: {type: 'text'}
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
    this.state = {
      columns: this.props.columns.map(c=> {
        return Object.assign(c, {display: true});
      })
    };

  }

  displayColumnCallback = (displayColumnsMap) => {
    var newColumnsState = this.state.columns.map((column)=> {
      var display;
      for(let columnStatus of displayColumnsMap) {
        if(columnStatus.name == column.name) {
          display = columnStatus.display;
          break;
        }
      }
      return Object.assign(column, {display: display});
    });
    this.setState({columns: newColumnsState});
  };

  onFilterChangeCallback = (filter)=> {

  };

  render() {
    return (
      <div className={styles.sheet}>
        <div className={styles.table}>
          <Header>
            {this.state.columns.map((column, index)=> {
              if(!column.display) return;
              return <CellHeader key={index}
                                 column={column}
                                 displayColumnsMap={this.state.columns.map((column)=>{return {name: column.name, display: column.display}})}
                                 displayColumnCallback={this.displayColumnCallback}
                                 filterChangeCallback={this.onFilterChangeCallback}/>
            })}
          </Header>
          {this.props.data.map((rowData)=> {
            return <Row key={rowData.id} data={rowData} columns={this.state.columns}/>
          })}
        </div>
      </div>
    );
  }
}
