import React, { Component } from 'react';
import styles from './dropdown.css'
import Columns from './columns/columns'
import clickOutside from '../../../../click-outside';
import TextFilter from './filter/text/text-filter';

export default class DropDown extends Component {

  static propTypes:{
    column: React.PropTypes.object,
    displayColumnsMap: React.PropTypes.array,
    displayColumnCallback: React.PropTypes.func,
    subMenuSelectedStateCallback: React.PropTypes.func,
    filterChangeCallback: React.PropTypes.func
    };

  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  possibleClose = true;
  onDisableClose = ()=> {
    this.possibleClose = false;
    this.props.subMenuSelectedStateCallback(this.possibleClose);
  };
  onEnableClose = ()=> {
    this.possibleClose = true;
    this.props.subMenuSelectedStateCallback(this.possibleClose);
  };

  componentDidMount = () => {
    this.clickOutsideCallbackId = clickOutside.addToSubscribers(this.onClickOutside)
  };

  componentWillUnmount = () => {
    clickOutside.deleteFromSubscribers(this.clickOutsideCallbackId)
  };

  clickOutsideCallbackId;
  onClickOutside = (e) => {
    if(!this.possibleClose) return;
    this.setState({selected: ''});
  };

  onMenuHoverColumns = () => {
    this.setState({selected: 'columns'});
  };
  onMenuHoverFilters = () => {
    this.setState({selected: 'filters'});
  };

  hideSubMenu = () => {
    this.setState({selected: ''});
  };

  displayColumnCallback = (displayColumnsMap) => {
    this.props.displayColumnCallback(displayColumnsMap);
  };

  onFilterChangeCallback = (filter)=> {
    this.props.filterChangeCallback(filter);
  };

  render() {

    return (
      <div className={styles.dropdown} onMouseOver={this.onDisableClose} onMouseOut={this.onEnableClose}>
        <div className={styles.dropdownItem} onMouseOver={this.hideSubMenu}>Sort one</div>
        <div className={styles.dropdownItem} onMouseOver={this.hideSubMenu}>Sort two</div>

        <div className={styles.dropdownItem} onMouseOver={this.onMenuHoverFilters}>
          <span>Filters</span>
        </div>
        <div className={styles.dropdownItem} onMouseOver={this.onMenuHoverColumns}>
          <span>Colums</span>
        </div>

        {(() => {
          switch(this.state.selected) {
            case "columns":
              return <Columns
                displayColumnsMap={this.props.displayColumnsMap}
                displayColumnCallback={this.displayColumnCallback}/>;
            case "filters":
              return <TextFilter
                column={this.props.column}
                filterChangeCallback={this.onFilterChangeCallback}
              />;
          }
        })()}

      </div>
    );
  }
}
