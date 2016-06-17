import React, { Component } from 'react';
import styles from './item-list.css';
import classnames from 'classnames'


export default class ItemList extends Component {

  static propTypes:{
    items: React.PropTypes.array.isRequired,
    onSelect: React.PropTypes.func.isRequired
    };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onItemClick = (item)=> {
    this.props.onSelect(item);
  };

  render() {
    var that = this;
    return (
      <div>
        {this.props.items.map(item => {
          return <div
            key={item}
            className={styles.item}
            onClick={(e) => {that.onItemClick(item)}}>
            {item}
          </div>
        })}
      </div>
    );
  }
}
