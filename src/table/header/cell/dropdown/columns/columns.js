import React, { Component } from 'react';
import columnsDropdownStyles from './columns.css'
import classNames from 'classnames';
import {Actions} from './../../../../flux/action'
import ColumnStore from './../../../../flux/stores/columns-store'

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Columns extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: ColumnStore.getColumns()
    };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  onChange = ()=> {
    this.setState({columns: ColumnStore.getColumns()})
  };

  componentDidMount = ()=> {
    ColumnStore.addChangeListener(this.onChange);
  };

  componentWillUnmount = ()=> {
    ColumnStore.removeChangeListener(this.onChange);
  };

  onChangeDisplayColumn = (objNameIsChecked)=> {
    if(objNameIsChecked.isChecked) Actions.showColumn(objNameIsChecked.name);
    else Actions.hideColumn(objNameIsChecked.name);
  };

  render() {
    return (
      <div className={columnsDropdownStyles.dropDownSubMenu}>
        {this.state.columns.map((colum)=> {
          return <div key={colum.name} className={columnsDropdownStyles.columnsItem}>
            <Checkbox name={colum.name}
                      checked={colum.display}
                      onChange={this.onChangeDisplayColumn}/>
            <span className={columnsDropdownStyles.columnName}>{colum.name}</span>
          </div>
        })}
      </div>
    );
  }
}

class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }

  onChange = (e)=> {
    var isChecked = this.isChecked(e.target);
    var changedColumn = this.getValue(e.target);
    this.setState({checked: isChecked});
    this.props.onChange({name: changedColumn, isChecked: isChecked})
  };

  isChecked = (node)=> {
    return node.checked;
  };

  getValue = (node)=> {
    return node.value;
  };

  render() {
    return (<input
      type="checkbox"
      checked={this.state.checked}
      onChange={this.onChange}
      value={this.props.name}
    />)
  }
}
