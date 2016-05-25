import React, { Component } from 'react';
import headerStyles from './header.css';
import tableStyles from '../table.css';
import clickOutside from '../../click-outside';
import classNames from 'classnames';
import CellHeader from './cell/cell'

export default class Header extends Component {

  static propTypes:{
    columns: React.PropTypes.array
    };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={classNames(headerStyles.tableRow)}>
        {this.props.columns.map((column)=>{return <CellHeader headerName={column.name}/>})}
      </div>
    );
  }
}
