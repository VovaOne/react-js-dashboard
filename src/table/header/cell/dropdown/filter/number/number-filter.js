import React, { Component } from 'react';
import filterDropdownStyles from './number-filter.css'
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




  render() {
    return (
      <div className={filterDropdownStyles.dropDownSubMenu}>
        number filter
      </div>
    );
  }
}
