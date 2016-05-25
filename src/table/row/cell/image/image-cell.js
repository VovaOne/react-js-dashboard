import React, { Component } from 'react';
import rowStyles from '../../row.css';


export default class ImageCell extends Component {

  static propTypes:{
    url: React.PropTypes.string
    };

  render() {
    return (
      <div className={rowStyles.tableCell}><img src={this.props.url} alt="checked"/></div>
    );
  }
}
