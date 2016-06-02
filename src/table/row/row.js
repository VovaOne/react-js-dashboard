import React, { Component } from 'react';
import rowStyles from './row.css';
import tableStyles from '../table.css';
import TextCell from './cell/text/text-cell';
import ImageCell from './cell/image/image-cell';
import classNames from 'classnames';


export default class Row extends Component {

  static propTypes:{
    columns: React.PropTypes.array.isRequired,
    data: React.PropTypes.object.isRequired
    };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={tableStyles.tableRow}>
        {this.props.columns.map((column)=> {

          if(!column.display) return;

          if(column.type == 'text') return <div key={column.name}
            className={classNames(tableStyles.tableCell ,rowStyles.tableCell)}>
            {this.props.data[column.data]}
          </div>

          else if(column.type == 'image') return <div key={column.name}
            className={classNames(tableStyles.tableCell ,rowStyles.tableCell)}>
            <img src={this.props.data[column.data]}
                 alt="checked"/>
          </div>
        })}
      </div>
    );
  }
}
