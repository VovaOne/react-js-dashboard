import React, { Component } from 'react';
import dropdownStyles from './../dropdown.css'


export default class Columns extends Component {

  static propTypes:{
    displayColumnsMap: React.PropTypes.array,
    displayColumnCallback: React.PropTypes.func
    };

  constructor(props) {
    super(props);
  }

  onHamburgerClick = () => {
    this.setState({isNavBarOpen: !this.state.isNavBarOpen});
  };

  render() {

    return (
      <div className={dropdownStyles.dropdownColums}>
        {this.props.displayColumnsMap.map((colum, index)=> {
          return <p>{colum.name}</p>
        })}
      </div>
    );
  }
}
