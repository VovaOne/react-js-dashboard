import React, { Component } from 'react';
import rowStyles from '../../row.css';

export default class TextCell extends Component {

  static propTypes:{
    text: React.PropTypes.string
    };

  render() {
    return (
      <div className={rowStyles.tableCell}>{this.props.text}</div>
    );
  }
}
