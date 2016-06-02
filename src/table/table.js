import React, { Component } from 'react';
import styles from './table.css';
import Header from './header/header'
import Row from './row/row'

import CellHeader from './header/cell/cell-header'
import classnames from 'classnames'

import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Actions} from './flux/action';
import ColumnStore from './flux/columns-store';

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
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    ColumnStore.initStore(this.props.columns);
    this.state = {
      columns: ColumnStore.getColumns(),
      tableDiv: null
    };
  }

  onChange = ()=> {
    this.setState({columns: ColumnStore.getColumns()})
  };

  componentDidMount = ()=> {
    //var tableDiv = React.findDOMNode(this);
    ColumnStore.addChangeListener(this.onChange);
  };

  componentWillUnmount = ()=> {
    ColumnStore.removeChangeListener(this.onChange);
  };

  onFilterChangeCallback = (filter)=> {

  };

  render() {
    return (
      <div className={styles.sheet}>
        <div className={styles.table}>
          <Header>
            {this.state.columns.map((column)=> {
              if(!column.display) return;
              return <CellHeader key={column.name}
                                 column={column}
              />
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
