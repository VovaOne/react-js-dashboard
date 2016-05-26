import React, { Component } from 'react';
import cellStyles from './cell.css';
import tableHeadStyle from '../header.css';
import tableStyle from '../../table.css';
import clickOutside from '../../../click-outside';
import classNames from 'classnames';
import DropDown from './dropdown/dropdown';

export default class Cell extends Component {

  static propTypes:{
    displayColumnsMap: React.PropTypes.array,
    displayColumnCallback: React.PropTypes.func
    };

  static idCount = 0;

  constructor(props) {
    super(props);

    this.state = {
      mouseEnter: false,
      dropDownOpened: false
    };
  }

  componentDidMount = () => {
   this.clickOutsideCallbackId = clickOutside.addToSubscribers(this.onClickOutside)
  };

  componentWillUnmount = () => {
    clickOutside.deleteFromSubscribers(this.clickOutsideCallbackId)
  };

  onMouseEnter = (e) => {
    e.preventDefault();
    this.setState({mouseEnter: true});
  };

  onMouseLeave = (e) => {
    e.preventDefault();
    if(this.state.dropDownOpened) return; // not hide
    this.setState({mouseEnter: false});
  };

  toggleDown = (e) => {
    e.preventDefault();
    this.setState({dropDownOpened: !this.state.dropDownOpened});
  };

  clickOutsideCallbackId;
  onClickOutside = (e) => {
    e.preventDefault();
    if(e.target.tagName == "SPAN") {
      e.target.parentNode.className.split("").forEach(c => {
        if(c == cellStyles.dropdown) this.setState({dropDownOpened: !this.state.dropDownOpened});
      });
    }
    else {
      this.setState({
        dropDownOpened: false,
        mouseEnter: false
      });
    }
  };

  displayColumnCallback = (displayColumnsMap) => {
    if(props.displayColumnCallback)displayColumnCallback(displayColumnsMap);
  };

  render() {
    console.log(this.state.dropDownOpened);
    return (
      <div className={classNames(tableHeadStyle.tableHead, tableStyle.tableCell)}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}>
        {this.props.headerName}
        {this.state.mouseEnter
        &&
        <div onClick={this.toggleDown}
             className={classNames(cellStyles.dropdown, this.state.dropDownOpened && cellStyles.block)}>
          <span>▼</span>
          <div className={classNames(cellStyles.dropdownContent, this.state.dropDownOpened && cellStyles.block)}>
            <DropDown
              displayColumnsMap={this.props.displayColumnsMap}
              displayCallback={this.displayColumnCallback}/>
          </div>
        </div>}

        {!this.state.mouseEnter
        &&
        <div onClick={this.toggleDown}
             className={classNames(cellStyles.noDropdown, this.state.dropDownOpened && cellStyles.block)}>
        </div>}
      </div>
    );
  }
}
