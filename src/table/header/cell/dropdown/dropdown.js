import React, { Component } from 'react';
import styles from './dropdown.css'
import Columns from './columns/columns'
import clickOutside from '../../../../click-outside';

export default class DropDown extends Component {

  static propTypes:{
    displayColumnsMap: React.PropTypes.array,
    displayColumnCallback: React.PropTypes.func
    };

  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }

  }

  componentDidMount = () => {
    this.clickOutsideCallbackId = clickOutside.addToSubscribers(this.onClickOutside)
  };

  componentWillUnmount = () => {
    clickOutside.deleteFromSubscribers(this.clickOutsideCallbackId)
  };

  clickOutsideCallbackId;
  onClickOutside = (e) => {
    this.setState({selected: ''});
  };

  onMenuHoverColumns = () => {
    this.setState({selected: 'columns'});
  };

  displayColumnCallback = (displayColumnsMap) => {
    if(props.displayColumnCallback)displayColumnCallback(displayColumnsMap);
  };

  render() {

    return (
      <div className={styles.dropdown}>
        <p className={styles.dropdownItem}>Sort one</p>
        <p className={styles.dropdownItem}>Sort two</p>

        <div className={styles.columsItem} onMouseOver={this.onMenuHoverColumns}>
          <span>Colums</span>

          {(() => {
            switch(this.state.selected) {
              case "columns":
                return <Columns
                  displayColumnsMap={this.props.displayColumnsMap}
                  displayCallback={this.displayColumnCallback}/>;
              case "filters":
                return <Columns
                  displayColumnsMap={this.props.displayColumnsMap}
                  displayCallback={this.displayColumnCallback}/>;
            }
          })()}


        </div>

      </div>
    );
  }
}
