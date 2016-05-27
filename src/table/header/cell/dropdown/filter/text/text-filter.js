import React, { Component } from 'react';
import filterDropdownStyles from './text-fillter.css'
import classNames from 'classnames';

export default class TextFilter extends Component {

  static propTypes:{
    column: React.PropTypes.object,
    filterChangeCallback: React.PropTypes.func
    };

  constructor(props) {
    super(props);

    this.state = {
      filterValue: ''
    }
  }


  onFilterChange = (e)=> {
    e.preventDefault();
    var value = e.target.value;
    this.setState({filterValue: value});
    var filter = this.buildFilter(value);
    this.props.filterChangeCallback(filter);
  };


  buildFilter = (value) => {
    return {
      field: this.props.column.name,
      data: {
        type: 'text',
        comparison: 'lq',
        value: value
      }
    }
  };


  render() {
    return (
      <div className={filterDropdownStyles.dropDownSubMenu}>
        <input
          type="text"
          value={this.state.filterValue}
          onChange={this.onFilterChange}
          className={filterDropdownStyles.textField}
        />
      </div>
    );
  }
}
