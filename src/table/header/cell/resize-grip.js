import React, { Component } from 'react';
import styles from './resize-grip.css';
import classNames from 'classnames';

import mouseEvents from '../../flux/event/mouse-events'
import ColumnStore from '../../flux/stores/columns-store'
import {Actions} from './../../flux/action'

export default class Resize extends Component {

  static propTypes:{
    column: React.PropTypes.object.isRequired
    };

  constructor(props) {
    super(props);

    this.state = {
      width: this.props.column.width.px,
      isPressed: false,
      xStart: null,
      x: 0
    };
  }


  componentDidMount = () => {
    mouseEvents.addMouseMoveListener(this.onMouseMove);
    mouseEvents.addMouseUpListener(this.onMouseUp);
    ColumnStore.getColumns()
  };

  componentWillUnmount = () => {
    mouseEvents.removeMouseMoveListener(this.onMouseMove);
    mouseEvents.removeMouseUpListener(this.onMouseUp);
  };

  onMouseDown = (e) => {
    //Actions.hideColumn(this.props.column.name);
    this.setState({isPressed: true, xStart: e.clientX});
  };


  onMouseMove = (e) => {
    if(!this.state.isPressed) return;

    var diff = e.clientX - this.state.xStart;

    //if()

    this.setState({x: e.clientX, width: this.props.column.width.px + diff});
  };

  onMouseUp = (e) => {
    if(!this.state.isPressed) return;
    this.setState({isPressed: false});
    Actions.columnsDidResize(this.props.column.name, this.state.width);
  };

  render() {
    return (<div style={{position: 'relative', height: '100%'}}>
        <div style={{left: this.state.x-this.state.xStart}}
             className={classNames(styles.resize, this.state.isPressed && styles.resizeHover)}
             onMouseDown={this.onMouseDown}>
        </div>
      </div>
    );
  }
}
