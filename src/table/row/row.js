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
      <tr className={rowStyles.tableRow}>
        {this.props.columns.map((column)=> {

          if(!column.display) return;

          if(column.type == 'text')
            return <td key={column.name}
                       className={classNames(rowStyles.tableCell)}
                       style={{minWidth:column.width.px, maxWidth:column.width.px}}>
              {this.props.data[column.data]}
            </td>

          else if(column.type == 'image')
            return <td key={column.name}
                       className={classNames(rowStyles.tableCell)}
                       style={{minWidth:column.width.px, maxWidth:column.width.px}}>
              <img src={this.props.data[column.data]}
                   alt="checked"/>
            </td>
        })}
      </tr>
    );
  }
}
