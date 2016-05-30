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

    var columns = this.countWidth(this.props.columns);
    columns = this.setDisplay(columns);

    this.state = {
      columns: columns
    };

  }

  setDisplay = (columns)=> {
    return columns.map(c=> {
      return Object.assign(c, {display: c.display == undefined ? true : c.display});
    });
  };
  countWidth = (columns)=> {
    var flexSum = columns.map(c=> {
      if(!c.width) c.width = {};
      if(!c.width.flex) c.width.flex = 1;
      return c.width.flex;
    }).reduce((prev, curr) => {
      return prev + curr;
    });

    var portion = 100 / flexSum;

    return columns.map(c => {
      return Object.assign(c, {width: {percentage: c.width.flex * portion, flex: c.width.flex, px: c.width.px}});
    })
  };

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
