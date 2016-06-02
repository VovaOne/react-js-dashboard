import React, { Component } from 'react';
import styles from './dropdown.css'
import Columns from './columns/columns'
import clickOutside from '../../../../click-outside';
import TextFilter from './filter/text/text-filter';
import NumberFilter from './filter/number/number-filter';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class DropDown extends Component {

  static propTypes:{
    column: React.PropTypes.object,
    displayColumnsMap: React.PropTypes.array,
    subMenuSelectedStateCallback: React.PropTypes.func
    };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

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

  render() {

    var getFilter = ()=> {

      switch(this.props.column.filter.type) {
        case "text":
          return <TextFilter
            column={this.props.column}
          />;
        case "number":
          return <NumberFilter/>
      }

    };

    return (
      <div className={styles.dropdown} onMouseOver={this.onDisableClose} onMouseOut={this.onEnableClose}>
        <div className={styles.dropdownItem} onMouseOver={this.hideSubMenu}>Sort one</div>
        <div className={styles.dropdownItem} onMouseOver={this.hideSubMenu}>Sort two</div>

        <div className={styles.dropdownItem} onMouseOver={this.onMenuHoverColumns}>
          <span>Colums</span>
        </div>

        {this.props.column.filter &&
        <div className={styles.dropdownItem} onMouseOver={this.onMenuHoverFilters}>
          <span>Filters</span>
        </div>
        }

        {(() => {
          switch(this.state.selected) {
            case "columns":
              return <Columns
                displayColumnsMap={this.props.displayColumnsMap}/>;
            case "filters":
              return getFilter()
          }
        })()}

      </div>
    );
  }
}
