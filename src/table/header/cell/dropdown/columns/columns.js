import React, { Component } from 'react';
import columnsDropdownStyles from './columns.css'
import classNames from 'classnames';

export default class Columns extends Component {

  static propTypes:{
    displayColumnsMap: React.PropTypes.array,
    displayColumnCallback: React.PropTypes.func
    };

  constructor(props) {
    super(props);
  }


  onDisplayColumnCallback = (e)=> {
    e.preventDefault();

  };

  render() {

    return (
      <div className={columnsDropdownStyles.dropDownSubMenu}>
        {this.props.displayColumnsMap.map((colum, index)=> {
          return <div key={index}
                      className={columnsDropdownStyles.columsItem}>
            <input
              type="checkbox"
              checked={colum.display}
              onChange={this.onDisplayColumnCallback}
            />
            <span className={columnsDropdownStyles.columnName}>{colum.name}</span>
          </div>
        })}
      </div>
    );
  }
}
