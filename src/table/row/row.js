import React, { Component } from 'react';
import rowStyles from './row.css';
import tableStyles from '../table.css';
import TextCell from './cell/text/text-cell';
import ImageCell from './cell/image/image-cell';


export default class Row extends Component {

  static propTypes:{
    columns: React.PropTypes.array,
    data: React.PropTypes.object
    };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={rowStyles.tableRow}>
        {this.props.columns.map((column)=>{
          if(column.type=='text') return <TextCell text={this.props.data[column.data]}/>
          if(column.type=='image') return <ImageCell url={this.props.data[column.data]}/>
        })}
      </div>
    );
  }
}
