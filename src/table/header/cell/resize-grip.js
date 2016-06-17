import React, { Component } from 'react';
import styles from './resize-grip.css';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import mouseEvents from '../../event/mouse-events'
import tableStore from '../../flux/stores/table-store'
import {Actions} from './../../flux/action'

export default class ResizeGrip extends Component {

  MIN_WIDTH = 20; //px

  static propTypes:{
    column: React.PropTypes.object.isRequired
    };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      width: this.props.column.width.px,
      isPressed: false,
      xStart: null,
      x: 0,
      height: tableStore.getHeight()
    };
  }

  onChange = () => {
    this.setState({height: tableStore.getHeight()});
  };


  componentDidMount = () => {
    tableStore.addChangeListener(this.onChange);
    mouseEvents.addMouseMoveListener(this.onMouseMove);
    mouseEvents.addMouseUpListener(this.onMouseUp);
  };

  componentWillUnmount = () => {
    tableStore.removeChangeListener(this.onChange);
    mouseEvents.removeMouseMoveListener(this.onMouseMove);
    mouseEvents.removeMouseUpListener(this.onMouseUp);

  };

  onMouseDown = (e) => {
    this.setState({isPressed: true, xStart: e.clientX});
  };


  onMouseMove = (e) => {
    if(!this.state.isPressed) return;

    var diff = e.clientX - this.state.xStart;
    var width = this.props.column.width.px + diff;

    if(width <= this.MIN_WIDTH) return;

    this.setState({x: e.clientX, width: width});
  };

  onMouseUp = (e) => {
    if(!this.state.isPressed) return;
    this.setState({isPressed: false});
    Actions.columnsDidResize(this.props.column.name, this.state.width);
  };

  render() {

    return (<div style={{position: 'relative', height: '100%'}}>
        <div style={{left: this.state.x-this.state.xStart, height:this.state.height+30}}
             className={classNames(styles.resize, this.state.isPressed && styles.resizeHover)}
             onMouseDown={this.onMouseDown}>
        </div>
      </div>
    );
  }
}
