import React, { Component } from 'react';
import cellStyles from './cell-header.css';
import tableHeadStyle from '../header.css';
import tableStyle from '../../table.css';
import clickOutside from '../../../click-outside';
import classNames from 'classnames';
import DropDown from './dropdown/dropdown';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class CellHeader extends Component {

  static propTypes:{
    column: React.PropTypes.object.isRequired
    };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      mouseEnter: false,
      dropDownOpened: false
    };
  }

  componentDidMount = () => {
    clickOutside.addClickListener(this.onClickOutside)
  };

  componentWillUnmount = () => {
    clickOutside.removeClickListener(this.onClickOutside)
  };

  onMouseEnter = (e) => {
    this.setState({mouseEnter: true});
  };

  onMouseLeave = (e) => {
    if(this.state.dropDownOpened) return; // not hide
    this.setState({mouseEnter: false});
  };


  toggleDown = (e) => {
    var classes = e.target.classList;

    //is different event
    var ourEvent = false;
    for(var i = 0; i < classes.length; i++) {
      if(classes[i] === "cell-header-toggle") {
        ourEvent = true;
      }
    }
    if(!ourEvent) return;

    this.setState({dropDownOpened: !this.state.dropDownOpened});
  };

  possibleCloseDropDown = true; //protect close on click outside when clicked in dropDown
  onDropDownSubMenuSelectedStateCallback = (possibleCloseDropDown)=> {
    this.possibleCloseDropDown = possibleCloseDropDown;
  };

  onClickOutside = (e) => {
    if(e.target.tagName == "SPAN") {
      e.target.parentNode.className.split("").forEach(c => {
        if(c == cellStyles.dropdown) this.setState({dropDownOpened: !this.state.dropDownOpened});
      });
      return;
    }
    if(!this.possibleCloseDropDown)return;
    this.setState({
      dropDownOpened: false,
      mouseEnter: false
    });

  };

  getColumnWidth = ()=> {
    if(this.props.column.width.px) return this.props.column.width.px + 'px';
    return this.props.column.width.percentage + '%';
  };

  render() {
    return (
      <div className={classNames(tableHeadStyle.tableHead, tableStyle.tableCell)}
           style={{width:this.getColumnWidth()}}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}>
        <div className={tableHeadStyle.columnName}><span>{this.props.column.name}</span></div>

        {this.state.mouseEnter
        &&
        <div onClick={this.toggleDown}
             className={classNames(cellStyles.dropdown, this.state.dropDownOpened && cellStyles.block,'cell-header-toggle')}>
          <span className={classNames('cell-header-toggle')}>▼</span>
          <div className={classNames(cellStyles.dropdownContent, this.state.dropDownOpened && cellStyles.block)}>
            <DropDown
              displayColumnsMap={this.props.displayColumnsMap}
              subMenuSelectedStateCallback={this.onDropDownSubMenuSelectedStateCallback}
              column={this.props.column}
            />
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
