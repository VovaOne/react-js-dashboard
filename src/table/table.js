import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
class Table extends Component {


  static propTypes:{
    columns: React.PropTypes.array.isRequired,
    data: React.PropTypes.array.isRequired
    };


  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    ColumnStore.initStore(this.props.columns, this.props.contentSize);
    this.state = {
      columns: ColumnStore.getColumns()
    };
  }

  onChange = ()=> {
    this.setState({columns: ColumnStore.getColumns()})
  };

  componentDidMount = ()=> {
    window.addEventListener('resize', this.didResize);
    ColumnStore.addChangeListener(this.onChange);
  };

  componentWillUnmount = ()=> {
    ColumnStore.removeChangeListener(this.onChange);
  };

  didResize = ()=> {
    Actions.tableDidResize(this.getWidthPx());
  };

  getWidthPx = ()=> {
    return ReactDOM.findDOMNode(this).offsetWidth
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
              return <CellHeader key={column}
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


//count div size
export default class TableWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = ()=> {
    this.setState({size: this.getWidthPx()});
  };

  getWidthPx = ()=> {
    return ReactDOM.findDOMNode(this).offsetWidth;
  };

  render() {
    return (<div>
      {this.state.size && <Table {...this.props} contentSize={this.state.size}/>}
    </div>);
  }
}
