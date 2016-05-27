import React, { Component } from 'react';
import columnsDropdownStyles from './columns.css'
import classNames from 'classnames';
import checkBoxUtil from './../../../../../util/checkbox'

export default class Columns extends Component {

  static propTypes:{
    displayColumnsMap: React.PropTypes.array,
    displayColumnCallback: React.PropTypes.func
    };

  constructor(props) {
    super(props);
    this.state = {
      displayColumnsMap: this.props.displayColumnsMap
    }
  }

  onDisplayColumnCallback = (e)=> {
    e.preventDefault();
    var isChecked = checkBoxUtil.isChecked(e.target);
    var changedColumn = checkBoxUtil.getValue(e.target);
    var newDisplayColumnsMapState = this.state.displayColumnsMap.map((column)=> {
      if(column.name == changedColumn) return {name: column.name, display: isChecked};
      else return column;
    });
    this.setState({displayColumnsMap: newDisplayColumnsMapState});
    this.props.displayColumnCallback(newDisplayColumnsMapState);
  };

  render() {
    return (
      <div className={columnsDropdownStyles.dropDownSubMenu}>
        {this.state.displayColumnsMap.map((colum, index)=> {
          return <div key={colum.name}
                      className={columnsDropdownStyles.columnsItem}>
            <input
              type="checkbox"
              checked={colum.display}
              onChange={this.onDisplayColumnCallback}
              value={colum.name}
            />
            <span className={columnsDropdownStyles.columnName}>{colum.name}</span>
          </div>
        })}
      </div>
    );
  }
}
