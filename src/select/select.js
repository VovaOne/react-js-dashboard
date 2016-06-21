import React, { Component } from 'react';
import styles from './select.css';
import classnames from 'classnames'
import ItemList from './open-area/item-list'
import mouseEvent from './../event/mouse-events'

import { Scrollbars } from 'react-custom-scrollbars';

export default class Select extends Component {

  static propTypes:{
    items: React.PropTypes.array.isRequired
    };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectItem: ''
    };
  }

  componentDidMount = () => {
    mouseEvent.addClickListener(this.onClickOutside)
  };

  componentWillUnmount = () => {
    mouseEvent.removeClickListener(this.onClickOutside)
  };

  onClickOutside = (e) => {
    if(this.state.isOpen) this.setState({isOpen: false})
  };

  toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({isOpen: !this.state.isOpen})
  };

  onItemSelect = (item)=> {
    this.setState({selectItem: item})
  };

  render() {
    return (
      <div>
        <div className={styles.wrapper} onClick={this.toggle}>
          <table className={styles.pr100}>
            <tbody>
            <tr>
              <td className={styles.inputColumn}>
                <input
                  type="text"
                  className={styles.input}
                  value={this.state.selectItem}
                />
              </td>
              <td
                className={styles.gripColumn}>
                <div className={classnames(styles.grip, this.state.isOpen ? styles.rotate180 : null)}>
                  {'▾'}
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          {this.state.isOpen && <div className={styles.openArea}>
            <Scrollbars
              autoHide={true}
              autoHeight={true}>
              <ItemList items={this.props.items}
                        onSelect={this.onItemSelect}/>
            </Scrollbars>
          </div>
          }
        </div>
      </div>
    );
  }
}
