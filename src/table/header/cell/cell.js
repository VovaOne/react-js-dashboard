import React, { Component } from 'react';
import cellStyles from './cell.css';
import tableHeadStyle from '../header.css';
import tableStyle from '../../table.css';
import clickOutside from '../../../click-outside';
import classNames from 'classnames';
import DropDown from './dropdown/dropdown';

export default class Cell extends Component {


  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      mouseEnter: true,
      dropDownOpened: true
    };
  }

  componentDidMount = () => {
    clickOutside.addToSubscribers(this.onClickOutside)
  };

  componentWillUnmount = () => {
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

  onClickOutside = (e) => {
    e.preventDefault();
    if(e.target.tagName == "SPAN") console.log(e.target.parentNode.className.split("").forEach(c => {
      if(c == cellStyles.dropdown) this.setState({dropDownOpened: !this.state.dropDownOpened});
    }));
    else this.setState({dropDownOpened: false});
  };


  render() {

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
            <DropDown/>
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
