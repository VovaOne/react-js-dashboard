import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './table.css';
import Header from './header/header'
import Row from './row/row'

import CellHeader from './header/cell/cell-header'
import classnames from 'classnames'

import PureRenderMixin from 'react-addons-pure-render-mixin';
import mouseMoveEventEmitter from './flux/event/mouse-events';
import {Actions} from './flux/action';
import tableStore from './flux/stores/table-store';


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
    tableStore.initStore(this.props.columns, this.props.contentSize.width);
    this.state = {
      columns: tableStore.getColumns()
    };
  }

  onChange = ()=> {
    this.setState({columns: tableStore.getColumns()})
  };

  componentDidMount = ()=> {
    window.addEventListener('resize', this.didResize);
    tableStore.addChangeListener(this.onChange);

    //height depend of row count
    tableStore.setHeight(ReactDOM.findDOMNode(this).offsetHeight);
  };

  componentWillUnmount = ()=> {
    tableStore.removeChangeListener(this.onChange);
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
      <div className={styles.sheet}
           onMouseMove={mouseMoveEventEmitter.emitMouseMove.bind(mouseMoveEventEmitter)}
           onMouseUp={mouseMoveEventEmitter.emitMouseUp.bind(mouseMoveEventEmitter)}>
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

  shouldComponentUpdate = (nextProps, nextState)=> {
    if(!this.state.size) return true;
    return false;
  };

  componentDidMount = ()=> {
    var size = this.getSizePx();
    this.setState({size: {width: size.width, height: size.height}});
  };

  getSizePx = ()=> {
    var contentDiv = ReactDOM.findDOMNode(this);
    return {width: contentDiv.offsetWidth, height: contentDiv.offsetHeight}
  };


  render() {
    return (<div className={styles.tableWrapper}>
      {this.state.size && <Table {...this.props} contentSize={this.state.size}/>}
    </div>);
  }
}
